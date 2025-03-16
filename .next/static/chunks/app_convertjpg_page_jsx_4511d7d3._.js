(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_convertjpg_page_jsx_4511d7d3._.js", {

"[project]/app/convertjpg/page.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jszip$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jszip/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$file$2d$saver$2f$dist$2f$FileSaver$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/file-saver/dist/FileSaver.min.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client"; // Add this directive at the top of the file
;
;
;
function Convertjpg() {
    _s();
    const [files, setFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [processedFiles, setProcessedFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isProcessing, setIsProcessing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isProcessed, setIsProcessed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Handle file input change
    const handleFileInputChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Convertjpg.useCallback[handleFileInputChange]": (e)=>{
            const newFiles = Array.from(e.target.files);
            setFiles({
                "Convertjpg.useCallback[handleFileInputChange]": (prevFiles)=>[
                        ...prevFiles,
                        ...newFiles
                    ]
            }["Convertjpg.useCallback[handleFileInputChange]"]);
        }
    }["Convertjpg.useCallback[handleFileInputChange]"], []);
    // Helper function to format file size
    const formatFileSize = (size)=>{
        if (size < 1024) return `${size} B`;
        if (size < 1024 * 1024) return `${(size / 1024).toFixed(2)} KB`;
        return `${(size / (1024 * 1024)).toFixed(2)} MB`;
    };
    // Function to calculate total size of uploaded images
    const getTotalSize = ()=>files.reduce((total, file)=>total + file.size, 0);
    // Convert image to JPG
    const convertImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Convertjpg.useCallback[convertImage]": (file)=>{
            return new Promise({
                "Convertjpg.useCallback[convertImage]": (resolve, reject)=>{
                    const img = new Image();
                    const url = URL.createObjectURL(file);
                    img.src = url;
                    img.onload = ({
                        "Convertjpg.useCallback[convertImage]": ()=>{
                            const canvas = document.createElement('canvas');
                            canvas.width = img.width;
                            canvas.height = img.height;
                            const ctx = canvas.getContext('2d');
                            ctx.drawImage(img, 0, 0);
                            canvas.toBlob({
                                "Convertjpg.useCallback[convertImage]": (blob)=>{
                                    if (!blob) {
                                        console.error('Failed to convert image:', file.name);
                                        reject(new Error('Failed to convert image.'));
                                        return;
                                    }
                                    resolve(blob);
                                }
                            }["Convertjpg.useCallback[convertImage]"], 'image/jpeg', 0.85);
                            URL.revokeObjectURL(url);
                        }
                    })["Convertjpg.useCallback[convertImage]"];
                    img.onerror = ({
                        "Convertjpg.useCallback[convertImage]": (err)=>{
                            console.error('Error loading image:', err);
                            URL.revokeObjectURL(url);
                            reject(new Error('Error loading image.'));
                        }
                    })["Convertjpg.useCallback[convertImage]"];
                }
            }["Convertjpg.useCallback[convertImage]"]);
        }
    }["Convertjpg.useCallback[convertImage]"], []);
    // Generate output file name
    const getOutputName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Convertjpg.useCallback[getOutputName]": (originalName)=>{
            return originalName.replace(/\.[^/.]+$/, '') + '_converted.jpg';
        }
    }["Convertjpg.useCallback[getOutputName]"], []);
    // Download processed files
    const downloadProcessedFiles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Convertjpg.useCallback[downloadProcessedFiles]": async ()=>{
            if (processedFiles.length === 0) {
                alert('No processed files to download.');
                return;
            }
            if (processedFiles.length === 1) {
                const file = processedFiles[0];
                console.log('Downloading:', file.name);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$file$2d$saver$2f$dist$2f$FileSaver$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveAs"])(new Blob([
                    file.blob
                ], {
                    type: 'image/jpeg'
                }), getOutputName(file.name));
            } else {
                const zip = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jszip$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
                for (const file of processedFiles){
                    zip.file(getOutputName(file.name), file.blob, {
                        binary: true
                    });
                }
                const content = await zip.generateAsync({
                    type: 'blob'
                });
                console.log('Downloading ZIP:', content);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$file$2d$saver$2f$dist$2f$FileSaver$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveAs"])(content, 'snapimg-converted-images.zip');
            }
            // Reset UI
            setFiles([]);
            setProcessedFiles([]);
            setProgress(0);
        }
    }["Convertjpg.useCallback[downloadProcessedFiles]"], [
        processedFiles,
        getOutputName
    ]);
    const clearAllFiles = ()=>{
        setFiles([]);
    };
    // Process all images
    const processImages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Convertjpg.useCallback[processImages]": async ()=>{
            if (!files || files.length === 0) {
                alert('No files selected. Please upload images first.');
                return;
            }
            setIsProcessing(true);
            setProgress(0);
            const supportedTypes = [
                'image/png',
                'image/webp',
                'image/gif',
                'image/jpeg'
            ];
            const totalFiles = files.length;
            let processedCount = 0;
            const newProcessedFiles = [];
            for (let file of files){
                if (!supportedTypes.includes(file.type)) {
                    alert(`Unsupported file type: ${file.name}. Only PNG, WEBP, GIF, and JPEG allowed.`);
                    continue;
                }
                try {
                    // Skip conversion if the file is already a JPG
                    if (file.type === 'image/jpeg') {
                        newProcessedFiles.push({
                            blob: file,
                            name: file.name
                        });
                    } else {
                        const processedBlob = await convertImage(file);
                        newProcessedFiles.push({
                            blob: processedBlob,
                            name: file.name
                        });
                    }
                } catch (error) {
                    console.error(`Error processing file ${file.name}:`, error);
                }
                processedCount++;
                setProgress(Math.floor(processedCount / totalFiles * 100));
            }
            setProcessedFiles(newProcessedFiles);
            setIsProcessing(false);
            setIsProcessed(newProcessedFiles.length > 0);
            if (newProcessedFiles.length > 0) {
            // alert('Processing complete! You can now download the files.');
            } else {
                alert('No valid images were processed.');
            }
        }
    }["Convertjpg.useCallback[processImages]"], [
        files,
        convertImage
    ]);
    // Delete a file from the list
    const deleteFile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Convertjpg.useCallback[deleteFile]": (index)=>{
            setFiles({
                "Convertjpg.useCallback[deleteFile]": (prevFiles)=>prevFiles.filter({
                        "Convertjpg.useCallback[deleteFile]": (_, i)=>i !== index
                    }["Convertjpg.useCallback[deleteFile]"])
            }["Convertjpg.useCallback[deleteFile]"]);
        }
    }["Convertjpg.useCallback[deleteFile]"], []);
    // Cleanup object URLs
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Convertjpg.useEffect": ()=>{
            return ({
                "Convertjpg.useEffect": ()=>{
                    files.forEach({
                        "Convertjpg.useEffect": (file)=>URL.revokeObjectURL(file)
                    }["Convertjpg.useEffect"]);
                }
            })["Convertjpg.useEffect"];
        }
    }["Convertjpg.useEffect"], [
        files
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Convertjpg.useEffect": ()=>{
            const dropZone = document.getElementById('drop-zone');
            const handleDragOver = {
                "Convertjpg.useEffect.handleDragOver": (e)=>{
                    e.preventDefault();
                    dropZone.classList.add('drag-over');
                }
            }["Convertjpg.useEffect.handleDragOver"];
            const handleDragLeave = {
                "Convertjpg.useEffect.handleDragLeave": ()=>{
                    dropZone.classList.remove('drag-over');
                }
            }["Convertjpg.useEffect.handleDragLeave"];
            const handleDrop = {
                "Convertjpg.useEffect.handleDrop": (e)=>{
                    e.preventDefault();
                    dropZone.classList.remove('drag-over');
                    const droppedFiles = Array.from(e.dataTransfer.files);
                    setFiles({
                        "Convertjpg.useEffect.handleDrop": (prevFiles)=>[
                                ...prevFiles,
                                ...droppedFiles
                            ]
                    }["Convertjpg.useEffect.handleDrop"]);
                }
            }["Convertjpg.useEffect.handleDrop"];
            dropZone.addEventListener('dragover', handleDragOver);
            dropZone.addEventListener('dragleave', handleDragLeave);
            dropZone.addEventListener('drop', handleDrop);
            return ({
                "Convertjpg.useEffect": ()=>{
                    dropZone.removeEventListener('dragover', handleDragOver);
                    dropZone.removeEventListener('dragleave', handleDragLeave);
                    dropZone.removeEventListener('drop', handleDrop);
                }
            })["Convertjpg.useEffect"];
        }
    }["Convertjpg.useEffect"], []);
    const resetState = ()=>{
        setFiles([]);
        setProcessedFiles([]);
        setProgress(0);
        setIsProcessed(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "tool-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "tool-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: "Convert to JPG"
                    }, void 0, false, {
                        fileName: "[project]/app/convertjpg/page.jsx",
                        lineNumber: 205,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "heading-desc",
                        children: "Drag and drop your images below to convert them to JPG format"
                    }, void 0, false, {
                        fileName: "[project]/app/convertjpg/page.jsx",
                        lineNumber: 206,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/convertjpg/page.jsx",
                lineNumber: 204,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "main-container-div",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "middle-container",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "upload-section",
                                id: "drop-zone",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "file",
                                        id: "file-input",
                                        multiple: true,
                                        onChange: handleFileInputChange,
                                        hidden: true
                                    }, void 0, false, {
                                        fileName: "[project]/app/convertjpg/page.jsx",
                                        lineNumber: 213,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "upload-content",
                                        onClick: ()=>document.getElementById('file-input').click(),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/img/upload.svg",
                                                alt: "Upload",
                                                className: "upload-icon"
                                            }, void 0, false, {
                                                fileName: "[project]/app/convertjpg/page.jsx",
                                                lineNumber: 224,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                children: "Drag & Drop Images"
                                            }, void 0, false, {
                                                fileName: "[project]/app/convertjpg/page.jsx",
                                                lineNumber: 225,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "or click to browse files"
                                            }, void 0, false, {
                                                fileName: "[project]/app/convertjpg/page.jsx",
                                                lineNumber: 226,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "support-text",
                                                children: "Supports: PNG, WEBP, GIF"
                                            }, void 0, false, {
                                                fileName: "[project]/app/convertjpg/page.jsx",
                                                lineNumber: 227,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/convertjpg/page.jsx",
                                        lineNumber: 220,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/convertjpg/page.jsx",
                                lineNumber: 212,
                                columnNumber: 11
                            }, this),
                            files.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "image-preview-main",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "image-preview-sub",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                children: "Uploaded Images"
                                            }, void 0, false, {
                                                fileName: "[project]/app/convertjpg/page.jsx",
                                                lineNumber: 234,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "file-counter",
                                                children: [
                                                    files.length,
                                                    " files uploaded | ",
                                                    formatFileSize(getTotalSize())
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/convertjpg/page.jsx",
                                                lineNumber: 235,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/convertjpg/page.jsx",
                                        lineNumber: 233,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "image-preview-grid",
                                        children: files.map((file, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "preview-item",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "filesize-img",
                                                        children: formatFileSize(file.size)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/convertjpg/page.jsx",
                                                        lineNumber: 242,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: URL.createObjectURL(file),
                                                        alt: file.name,
                                                        className: "preview-image"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/convertjpg/page.jsx",
                                                        lineNumber: 244,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "delete-btn",
                                                        onClick: ()=>deleteFile(index),
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: "/img/delete.svg",
                                                            alt: "Delete"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/convertjpg/page.jsx",
                                                            lineNumber: 253,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/convertjpg/page.jsx",
                                                        lineNumber: 249,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/app/convertjpg/page.jsx",
                                                lineNumber: 241,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/convertjpg/page.jsx",
                                        lineNumber: 239,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/convertjpg/page.jsx",
                                lineNumber: 232,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/convertjpg/page.jsx",
                        lineNumber: 211,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "right-options-container",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "right-options-heading",
                                        children: "Progress"
                                    }, void 0, false, {
                                        fileName: "[project]/app/convertjpg/page.jsx",
                                        lineNumber: 264,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "progress-container",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "progress-bar",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "progress",
                                                    style: {
                                                        width: `${progress}%`
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/convertjpg/page.jsx",
                                                    lineNumber: 267,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/convertjpg/page.jsx",
                                                lineNumber: 266,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "progress-text",
                                                id: "progress-text",
                                                children: [
                                                    progress,
                                                    "% Completed"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/convertjpg/page.jsx",
                                                lineNumber: 269,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/convertjpg/page.jsx",
                                        lineNumber: 265,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/convertjpg/page.jsx",
                                lineNumber: 263,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "right-options-heading",
                                        children: "Actions"
                                    }, void 0, false, {
                                        fileName: "[project]/app/convertjpg/page.jsx",
                                        lineNumber: 275,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "action-bar",
                                        children: [
                                            !isProcessed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "btn-4",
                                                onClick: processImages,
                                                disabled: isProcessing || files.length === 0,
                                                children: isProcessing ? 'Processing...' : 'Convert to JPG'
                                            }, void 0, false, {
                                                fileName: "[project]/app/convertjpg/page.jsx",
                                                lineNumber: 278,
                                                columnNumber: 17
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "btn-4",
                                                onClick: downloadProcessedFiles,
                                                children: "Download"
                                            }, void 0, false, {
                                                fileName: "[project]/app/convertjpg/page.jsx",
                                                lineNumber: 282,
                                                columnNumber: 17
                                            }, this),
                                            isProcessed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "btn-2",
                                                onClick: resetState,
                                                children: "Reset"
                                            }, void 0, false, {
                                                fileName: "[project]/app/convertjpg/page.jsx",
                                                lineNumber: 287,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/convertjpg/page.jsx",
                                        lineNumber: 276,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/convertjpg/page.jsx",
                                lineNumber: 274,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/convertjpg/page.jsx",
                        lineNumber: 262,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/convertjpg/page.jsx",
                lineNumber: 210,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/convertjpg/page.jsx",
        lineNumber: 203,
        columnNumber: 5
    }, this);
}
_s(Convertjpg, "SDYdnMX6CoBinlscJzmfVs7VWAA=");
_c = Convertjpg;
const __TURBOPACK__default__export__ = Convertjpg;
var _c;
__turbopack_context__.k.register(_c, "Convertjpg");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_convertjpg_page_jsx_4511d7d3._.js.map