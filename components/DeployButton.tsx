import React from 'react';

export default function DeployButton({ hrefParam }:any) {
  return (
    <a
      className="py-2 px-3 flex rounded-md no-underline hover:bg-btn-background-hover border"
      href={'/'+hrefParam}
      rel="noreferrer"
    >
      {hrefParam}
    </a>
  );
}
