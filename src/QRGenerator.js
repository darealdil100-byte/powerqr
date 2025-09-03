import React, { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";

function QRGenerator() {
  const [text, setText] = useState("");
    const qrRef = useRef();

      const downloadQR = () => {
          const canvas = qrRef.current.querySelector("canvas");
              const url = canvas.toDataURL("image/png");
                  const a = document.createElement("a");
                      a.href = url;
                          a.download = "powerqr.png";
                              a.click();
                                };

                                  return (
                                      <div style={{ textAlign: "center", marginTop: "50px" }}>
                                            <h1>PowerQR</h1>
                                                  <input
                                                          type="text"
                                                                  placeholder="Enter text"
                                                                          value={text}
                                                                                  onChange={(e) => setText(e.target.value)}
                                                                                          style={{ padding: "10px", marginBottom: "20px", width: "250px" }}
                                                                                                />
                                                                                                      <div ref={qrRef}>
                                                                                                              <QRCodeCanvas value={text || "Hello World"} size={200} />
                                                                                                                    </div>
                                                                                                                          <br />
                                                                                                                                <button
                                                                                                                                        onClick={downloadQR}
                                                                                                                                                style={{
                                                                                                                                                          marginTop: "20px",
                                                                                                                                                                    padding: "10px 20px",
                                                                                                                                                                              background: "#4CAF50",
                                                                                                                                                                                        color: "white",
                                                                                                                                                                                                  border: "none",
                                                                                                                                                                                                            borderRadius: "5px",
                                                                                                                                                                                                                      cursor: "pointer",
                                                                                                                                                                                                                              }}
                                                                                                                                                                                                                                    >
                                                                                                                                                                                                                                            Download QR
                                                                                                                                                                                                                                                  </button>
                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                        );
                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                        export default QRGenerator;