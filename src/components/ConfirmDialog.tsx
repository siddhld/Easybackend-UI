"use client";
import React from "react";
import "./ConfirmDialog.css";

interface ConfirmDialogProps {
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60">
      <div className="card">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="card-inner px-4 flex flex-col justify-center gap-5 rounded shadow-slate-50 text-center">
          <p className="text-slate-300">
            Are you sure you want to go to the Homepage?
          </p>
          <div className=" flex justify-center gap-7">
          
            <div className="sp">
              <button onClick={onConfirm} className="sparkle-button sparkle-button-green bg-green-700">
                <span className="backdrop"></span>
                
                <span className="text">Yess</span>
              </button>
              <div className="bodydrop"></div>
              <span className="particle-pen" aria-hidden="true">
                {" "}
              </span>
            </div>

            <div className="sp">
              <button onClick={onCancel} className="sparkle-button sparkle-button-red bg-red-800">
                <span className="backdrop"></span>

                <span className="text">Nope</span>
              </button>
              <div className="bodydrop"></div>
              <span className="particle-pen" aria-hidden="true">
                {" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;
