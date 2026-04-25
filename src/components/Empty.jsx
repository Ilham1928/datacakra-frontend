import React from "react";
import { Icon } from "@iconify/react";

const Empty = ({ actionLabel, onAction, className = "" }) => {
  return (
    <div
      data-testid="empty-state"
      className={`flex flex-col items-center justify-center text-center px-6 py-12 sm:py-16 ${className}`}
    >
      <div className="flex items-center justify-center bg-slate-100 text-slate-500 mb-5 w-10 h-10 rounded-full p-1">
        <Icon icon="fa7-solid:box-open" width={60} />
      </div>

      <h3
        data-testid="empty-state-title"
        className="text-base sm:text-lg font-semibold text-white"
      >
        No Data Available
      </h3>

      <p
        data-testid="empty-state-description"
        className="mt-2 max-w-sm text-sm text-slate-500 leading-relaxed"
      >
        Create or Refresh page to get show the data
      </p>

      {actionLabel && onAction && (
        <button
          data-testid="empty-state-action-button"
          type="button"
          onClick={onAction}
          className="mt-6 inline-flex items-center justify-center px-4 py-2 rounded-lg bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 transition-colors"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
};

export default Empty;
