"use client";

import React, { useState, useCallback, useEffect } from "react";
import JSZip from "jszip";
import { saveAs } from "file-saver";

function Convertjpg() {
  const [files, setFiles] = useState([]);
  const [processedFiles, setProcessedFiles] = useState([]);
  const [progress, setProgress] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [autoDownloadSeconds, setAutoDownloadSeconds] = useState(5);
  const [autoDownloadActive, setAutoDownloadActive] = useState(false);
  const [autoDownloadCancelled, setAutoDownloadCancelled] = useState(false);
  const autoDownloadIntervalRef = React.useRef(null);



  const handleFileInputChange = useCallback((e) => {
    if (!e.target.files.length) return;
    const newFiles = Array.from(e.target.files);
    setFiles(newFiles);
    e.target.value = "";
  }, []);

  const convertImage = (file) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      const url = URL.createObjectURL(file);

      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;

        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);

        canvas.toBlob(
          (blob) => {
            URL.revokeObjectURL(url);
            resolve(blob);
          },
          "image/jpeg",
          0.85
        );
      };

      img.onerror = () => {
        URL.revokeObjectURL(url);
        reject(new Error("Error loading image"));
      };

      img.src = url;
    });
  };

  const getOutputName = (name) =>
    name.replace(/\.[^/.]+$/, "") + "_converted.jpg";

  const triggerAutoDownload = (files) => {
    setAutoDownloadSeconds(5);
    setAutoDownloadActive(true);
    setAutoDownloadCancelled(false);

    let countdown = 5;

    // Clear old interval (if any)
    if (autoDownloadIntervalRef.current) {
      clearInterval(autoDownloadIntervalRef.current);
    }

    autoDownloadIntervalRef.current = setInterval(() => {
      countdown--;
      setAutoDownloadSeconds(countdown);

      if (countdown <= 0) {
        clearInterval(autoDownloadIntervalRef.current);

        if (!autoDownloadCancelled) {
          if (files.length === 1) {
            saveAs(
              new Blob([files[0].blob], { type: "image/jpeg" }),
              getOutputName(files[0].name)
            );
          } else {
            const zip = new JSZip();
            files.forEach((f) => zip.file(getOutputName(f.name), f.blob));

            zip.generateAsync({ type: "blob" }).then((content) => {
              saveAs(content, "snapimg-converted-images.zip");
            });
          }
        }

        setAutoDownloadActive(false);
      }
    }, 1000);
  };

  useEffect(() => {
    return () => {
      if (autoDownloadIntervalRef.current) {
        clearInterval(autoDownloadIntervalRef.current);
      }
    };
  }, []);



  const manualDownload = () => {
    setAutoDownloadCancelled(true);
    setAutoDownloadActive(false);

    if (autoDownloadIntervalRef.current) {
      clearInterval(autoDownloadIntervalRef.current);
    }

    if (processedFiles.length === 1) {
      saveAs(
        new Blob([processedFiles[0].blob], { type: "image/jpeg" }),
        getOutputName(processedFiles[0].name)
      );
    } else {
      const zip = new JSZip();
      processedFiles.forEach((f) => zip.file(getOutputName(f.name), f.blob));

      zip.generateAsync({ type: "blob" }).then((content) => {
        saveAs(content, "snapimg-converted-images.zip");
      });
    }
  };




  useEffect(() => {
    if (files.length === 0) return;

    const process = async () => {
      setIsProcessing(true);
      setProgress(0);

      const supported = ["image/png", "image/jpeg", "image/webp", "image/gif"];
      const validFiles = files.filter((f) => supported.includes(f.type));
      const total = validFiles.length;

      let completed = 0;
      const processedList = [];

      for (const file of validFiles) {
        const blob =
          file.type === "image/jpeg"
            ? file
            : await convertImage(file);

        processedList.push({ blob, name: file.name });

        completed++;
        setProgress(Math.floor((completed / total) * 100));
      }

      setProcessedFiles(processedList);
      setIsProcessing(false);

      if (processedList.length) triggerAutoDownload(processedList);
    };

    process();
  }, [files]);

  const deleteFile = (index) => {
    const updated = files.filter((_, i) => i !== index);
    setFiles(updated);
    setProcessedFiles([]);
    setProgress(0);
  };

  return (
    <div>
      <div className="tool-container">
        <div className="tool-header">
          <h1>Convert to JPG</h1>
          <p className="heading-desc">Instant JPG conversion. No clicks needed.</p>
        </div>

        <div className="main-container-div" id="drop-zone">
          <div className="middle-container">
            <div className="upload-section">
              <input
                type="file"
                id="file-input"
                multiple
                hidden
                onChange={handleFileInputChange}
              />
              <div
                className="upload-content"
                onClick={() => document.getElementById("file-input").click()}
              >
                <img src="/img/upload.svg" className="upload-icon" />
                <h3>Drag & Drop Images</h3>
                <p>or click to browse files</p>
                <p className="support-text">Supported: PNG, WEBP, GIF, JPG</p>
              </div>
            </div>

            {files.length > 0 && (
              <div className="image-preview-main">
                <h3>Converting…</h3>
                <div className="image-preview-grid">
                  {files.map((file, index) => (
                    <div key={index} className="preview-item">
                      <img
                        src={URL.createObjectURL(file)}
                        className="preview-image"
                      />
                      <button className="delete-btn" onClick={() => deleteFile(index)}>
                        <img src="/img/delete-btn.svg" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="right-options-container">
            <h3 className="right-options-heading">Progress</h3>
            <div className="progress-container">
              <div className="progress-bar">
                <div className="progress" style={{ width: `${progress}%` }} />
              </div>
              <div className="progress-text">{progress}% Completed</div>
            </div>

            {processedFiles.length > 0 && (
              <button className="btn-4" onClick={manualDownload}>
                {autoDownloadActive && !autoDownloadCancelled
                  ? `Download (${autoDownloadSeconds}s)`
                  : "Download"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Convertjpg;