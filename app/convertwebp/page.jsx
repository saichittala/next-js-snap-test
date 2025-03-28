"use client"; // Mark this component as a client component

import React, { useState, useCallback, useEffect } from 'react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';


function ConvertToWebp() {
  const [files, setFiles] = useState([]);
  const [processedFiles, setProcessedFiles] = useState([]);
  const [progress, setProgress] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isProcessed, setIsProcessed] = useState(false);

  // const seoConfig = {
  //   title: "Convert to WebP - Free Online Image to WebP Converter | SnapIMG",
  //   description:
  //     "Convert images to WebP format online for free. Drag and drop your JPG, PNG, or GIF files and download high-quality WebP images instantly.",
  //   canonicalUrl: "https://www.snapimg.site/convertwebp",
  //   keywords: [
  //     "convert to WebP",
  //     "image to WebP converter",
  //     "free WebP converter",
  //     "online WebP converter",
  //     "convert JPG to WebP",
  //     "convert PNG to WebP",
  //     "convert GIF to WebP",
  //     "best WebP converter online",
  //     "high-quality WebP conversion",
  //     "WebP image converter",
  //     "fast WebP converter tool",
  //     "bulk WebP conversion online",
  //     "instant WebP converter",
  //     "JPG to WebP converter free",
  //     "PNG to WebP format converter",
  //     "SnapIMG WebP conversion",
  //     "lossless WebP conversion",
  //     "best free image to WebP converter"
  //   ],
  //   structuredData: {
  //     "@context": "https://schema.org",
  //     "@type": "HowTo",
  //     name: "How to Convert Images to WebP Format",
  //     description: "Learn how to convert images to WebP format using SnapIMG.",
  //     step: [
  //       {
  //         "@type": "HowToStep",
  //         text: "Upload your image in JPG, PNG, or GIF format.",
  //       },
  //       {
  //         "@type": "HowToStep",
  //         text: "Click 'Convert to WebP' to process the image.",
  //       },
  //       {
  //         "@type": "HowToStep",
  //         text: "Download the converted WebP image.",
  //       },
  //     ],
  //   },
  // };
  

  // Handle file input change
  const handleFileInputChange = useCallback((e) => {
    if (!e.target.files.length) return; // Ensure files are selected

    const newFiles = Array.from(e.target.files);
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);

    // Reset the input field to allow re-uploading the same files
    e.target.value = "";
  }, []);



  // Helper function to format file size
  const formatFileSize = (size) => {
    if (size < 1024) return `${size} B`;
    if (size < 1024 * 1024) return `${(size / 1024).toFixed(2)} KB`;
    return `${(size / (1024 * 1024)).toFixed(2)} MB`;
  };

  // Function to calculate total size of uploaded images
  const getTotalSize = () => files.reduce((total, file) => total + file.size, 0);

  // Convert image to WebP
  const convertImage = useCallback((file) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      const url = URL.createObjectURL(file);
      img.src = url;

      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);

        canvas.toBlob(
          (blob) => {
            if (!blob) {
              console.error('Failed to convert image:', file.name);
              reject(new Error('Failed to convert image.'));
              return;
            }
            resolve(blob);
          },
          'image/webp', // Convert to WebP format
          0.8 // Quality (0.8 = 80% quality for lossy compression)
        );
        URL.revokeObjectURL(url);
      };

      img.onerror = (err) => {
        console.error('Error loading image:', err);
        URL.revokeObjectURL(url);
        reject(new Error('Error loading image.'));
      };
    });
  }, []);

  // Generate output file name
  const getOutputName = useCallback((originalName) => {
    return originalName.replace(/\.[^/.]+$/, '') + '_converted.webp'; // Change extension to WebP
  }, []);

  // Download processed files
  const downloadProcessedFiles = useCallback(async () => {
    if (processedFiles.length === 0) {
      alert('No processed files to download.');
      return;
    }

    if (processedFiles.length === 1) {
      const file = processedFiles[0];
      console.log('Downloading:', file.name);
      saveAs(new Blob([file.blob], { type: 'image/webp' }), getOutputName(file.name)); // Change MIME type to WebP
    } else {
      const zip = new JSZip();
      for (const file of processedFiles) {
        zip.file(getOutputName(file.name), file.blob, { binary: true });
      }

      const content = await zip.generateAsync({ type: 'blob' });
      console.log('Downloading ZIP:', content);
      saveAs(content, 'snapimg-converted-images.zip');
    }

    // Reset UI
    setFiles([]);
    setProcessedFiles([]);
    setProgress(0);
  }, [processedFiles, getOutputName]);

  // Process all images
  const processImages = useCallback(async () => {
    if (!files || files.length === 0) {
      alert('No files selected. Please upload images first.');
      return;
    }

    setIsProcessing(true);
    setProgress(0);

    const supportedTypes = ['image/png', 'image/webp', 'image/gif', 'image/jpeg'];
    const totalFiles = files.length;
    let processedCount = 0;
    const newProcessedFiles = [];

    for (let file of files) {
      if (!supportedTypes.includes(file.type)) {
        alert(`Unsupported file type: ${file.name}. Only PNG, WEBP, GIF, and JPEG allowed.`);
        continue;
      }

      try {
        // Skip conversion if the file is already a WebP
        if (file.type === 'image/webp') {
          newProcessedFiles.push({ blob: file, name: file.name });
        } else {
          const processedBlob = await convertImage(file);
          newProcessedFiles.push({ blob: processedBlob, name: file.name });
        }
      } catch (error) {
        console.error(`Error processing file ${file.name}:`, error);
      }

      processedCount++;
      setProgress(Math.floor((processedCount / totalFiles) * 100));
    }

    setProcessedFiles(newProcessedFiles);
    setIsProcessing(false);
    setIsProcessed(newProcessedFiles.length > 0);

    if (newProcessedFiles.length > 0) {
      // alert('Processing complete! You can now download the files.');
    } else {
      alert('No valid images were processed.');
    }
  }, [files, convertImage]);

  // Delete a file from the list
  const deleteFile = useCallback((index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  }, []);

  // Cleanup object URLs
  useEffect(() => {
    return () => {
      files.forEach(file => URL.revokeObjectURL(file));
    };
  }, [files]);

  useEffect(() => {
    const dropZone = document.getElementById('drop-zone');

    const handleDragOver = (e) => {
      e.preventDefault();
      dropZone.classList.add('drag-over');
    };

    const handleDragLeave = () => {
      dropZone.classList.remove('drag-over');
    };

    const handleDrop = (e) => {
      e.preventDefault();
      dropZone.classList.remove('drag-over');

      const droppedFiles = Array.from(e.dataTransfer.files);
      setFiles((prevFiles) => [...prevFiles, ...droppedFiles]);
    };

    dropZone.addEventListener('dragover', handleDragOver);
    dropZone.addEventListener('dragleave', handleDragLeave);
    dropZone.addEventListener('drop', handleDrop);

    return () => {
      dropZone.removeEventListener('dragover', handleDragOver);
      dropZone.removeEventListener('dragleave', handleDragLeave);
      dropZone.removeEventListener('drop', handleDrop);
    };
  }, []);

  const resetState = () => {
    setFiles([]);
    setProcessedFiles([]);
    setProgress(0);
    setIsProcessed(false);
  };

  return (
    <div>
      {/* <Seo {...seoConfig} /> */}
      <div className="tool-container">
        <div className="tool-header">
          <h1>Convert to WebP</h1> {/* Update title */}
          <p className="heading-desc">
            Drag and drop your images below to convert them to WebP format {/* Update description */}
          </p>
        </div>

        <div className='main-container-div' id="drop-zone">
          <div className='middle-container'>
            <div className="upload-section">
              <input
                type="file"
                id="file-input"
                multiple
                onChange={handleFileInputChange}
                hidden
              />
              <div
                className="upload-content"
                onClick={() => document.getElementById('file-input').click()}
              >
                <img src="/img/upload.svg" alt="Upload" className="upload-icon" />
                <h3>Drag & Drop Images</h3>
                <p>or click to browse files</p>
                <p className="support-text">Supports: PNG, WEBP, GIF, JPEG</p> {/* Update supported formats */}
              </div>
            </div>

            {/* File Previews */}
            {files.length > 0 && (
              <div className="image-preview-main">
                <div className='image-preview-sub'>
                  <h3>Uploaded Images</h3>
                  <div className="file-counter">
                    {files.length} files uploaded | {formatFileSize(getTotalSize())}
                  </div>
                </div>
                <div className='image-preview-grid'>
                  {files.map((file, index) => (
                    <div key={index} className="preview-item">
                      <span className='filesize-img'>{formatFileSize(file.size)}</span>

                      <img
                        src={URL.createObjectURL(file)}
                        alt={file.name}
                        className="preview-image"
                      />
                      <button
                        className="delete-btn"
                        onClick={() => deleteFile(index)}
                      >
                        <img src="/img/delete-btn.svg" alt="Delete" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className='right-options-container'>
            <div>
              <h3 className='right-options-heading'>Progress</h3>
              <div className="progress-container">
                <div className="progress-bar">
                  <div className="progress" style={{ width: `${progress}%` }}></div>
                </div>
                <div className="progress-text" id="progress-text">
                  {progress}% Completed
                </div>
              </div>
            </div>

            <div>
              <h3 className='right-options-heading'>Actions</h3>
              <div className="action-bar">
                {!isProcessed ? (
                  <button className="btn-4" onClick={processImages} disabled={isProcessing || files.length === 0}>
                    {isProcessing ? 'Processing...' : 'Convert to WebP'}
                  </button>
                ) : (
                  <button className="btn-4" onClick={downloadProcessedFiles}>
                    Download
                  </button>
                )}
                {isProcessed && (
                  <button className="btn-2" onClick={resetState}>
                    Reset
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default ConvertToWebp;