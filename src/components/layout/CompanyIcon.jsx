import Image from 'next/image';
import React from 'react';

export default function CompanyIcon() {
  return (
    <Image
      src="/header-icon.png"
      alt="coffee-all-day"
      width={150}
      height={50}
    ></Image>
  );
}
