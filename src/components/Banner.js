import React from 'react';

//import image
import Image from '../assets/img/house-banner.png';

//import components
import Search from '../components/Search';

function Banner() {
  return (
    <section className='h-full max-h-[640px] mb-8 mb-24'>
      <div className='flex flex-col lg:flex-row'>
        <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left px-4 lg:px-0'>
          <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6'>Hayalinizdeki Evi <span className='text-violet-700'>Kiralayın</span></h1>
          <p className='max-w-[480px] mb-8'>
            SAHİBİNDEN YATIRIMLIK
            ESKİŞEHİR YOLUNA 1 KM MESAFEDE,
            Başkent OSB-Anadolu OSB-BALLIKUYUMCU TOKİ PROJESİ-OYAK PROJESİ-BESA ESKİŞEHİR YOLU PROJELERİNE KOMŞU
            811 mt2 İmarlı Tek Tapu 0.30 Emsal Villa Parseli.
            Mantıklı Araç Takası Değerlendirilir.
          </p>
        </div>
        <div className='hidden flex-1 lg:flex justify-end items-end'>
          <img src={Image} alt='' />
        </div>
      </div>
      <Search  />
    </section>
  );
};

export default Banner;
