import Image from 'next/image';
import React from 'react';
import CompanyIcon from '../CompanyIcon';

export default function Footer() {
  return (
    <footer className="w-full p-4 border-t-slate-800 flex justify-center items-center flex-wrap">
      <p className="w-full text-center mb-3">
        © Copyright 2023 - Coffee All day
      </p>
      <CompanyIcon />
    </footer>
  );
}
