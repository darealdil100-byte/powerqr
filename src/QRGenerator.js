import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

function QRGenerator() {
  const [text, setText] = useState("");

    return (
        <div>
              <h1>PowerQR</h1>
                    <input
                            type="text"
                                    placeholder="Enter text"
                                            value={text}
                                                    onChange={(e) => setText(e.target.value)}
                                                          />
                                                                <QRCodeCanvas value={text || "Hello World"} />
                                                                    </div>
                                                                      );
                                                                      }

                                                                      export default QRGenerator;