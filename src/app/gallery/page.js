'use client';

import React, { useState, useEffect } from 'react';
import PageHeader from "../../components/PageHeader";

const fallbackImageLinks = [
  'https://lh3.googleusercontent.com/gps-cs-s/AHVAweoVc0GeedbMSYXlJJC_FyuEZW6UyQLaiplZuZFhHSkyjf1L381Zy8WfLGyEOcHCA68EzLeT6-j7vBMJ7VNARQ-NAaxP-m453xayYBKWsU9U-goKVnZiLIkQylF_ZUs0iYUGnWoGdw=w1920-h1080-k-no',
  'https://lh3.googleusercontent.com/p/AF1QipOe2d19WCFrNfY68YNHOikD1eI7fgIqB3t2vfuc=w1920-h1080-k-no',
  'https://lh3.googleusercontent.com/p/AF1QipNbfp5pKuCpM9Y__1JnWTOC86mLnfAiLsdNH4jj=w1920-h1080-k-no',
  'https://lh3.googleusercontent.com/p/AF1QipPfVzqbNchFyZztJMhn7iatnAulD5_lD8G6XcyB=w1920-h1080-k-no',
  'https://lh3.googleusercontent.com/p/AF1QipPnCQi1v6r4KNBzfmsRMgRoxlXOrVXxbYHF4wFe=w1920-h1080-k-no',
  'https://lh3.googleusercontent.com/p/AF1QipN2y8RuT-i_DDhwGd4coJ1V2cb2WVvlqmaFOLMY=w1920-h1080-k-no',
  'https://lh3.googleusercontent.com/p/AF1QipM_qfk89YKVN0zDHbzpPDIIqTGlBT5ecRUla5qp=w1920-h1080-k-no',
  'https://lh3.googleusercontent.com/p/AF1QipO9dy5a4FBbNFoVGxd6f7sKFtJk-FfFY73Eo0oH=w1920-h1080-k-no',
  'https://lh3.googleusercontent.com/p/AF1QipOVCgpS8BD6Pw4jRe-PGTWkMz8nECVrl3GyRZCH=w1920-h1080-k-no',
  'https://lh3.googleusercontent.com/p/AF1QipM6ZNvLg_3v_R6O1oVdFpKVWF6aHeRzBAIXkQKj=w1920-h1080-k-no',
  'https://lh3.googleusercontent.com/p/AF1QipNMtennMBS321RH_0Fg9abPHFlXKrCXmQNYOZIE=w1920-h1080-k-no',
  'https://lh3.googleusercontent.com/p/AF1QipPXJZiTFee5C9j1RzTkRyXjqF1Grxtes3rqq-_A=w1920-h1080-k-no',
  'https://lh3.googleusercontent.com/p/AF1QipNU7OoGzHRgOdJ_HV1-KkzksxnQmTD8n_TS6TGf=w1920-h1080-k-no',
  'https://lh3.googleusercontent.com/p/AF1QipOSHAwApqAhh7vQmv8db_nWeRijhnn2yXywY5Qz=w1920-h1080-k-no',
  'https://lh3.googleusercontent.com/p/AF1QipNe9aJEkpgHMTfK1uUzm9F-4uxv1YJpVeVHyY2T=w1920-h1080-k-no',
  'https://lh3.googleusercontent.com/p/AF1QipNolrSykNhWy_tJlKbgc2Z3X7WpsAqTG4e1DIjZ=w1920-h1080-k-no',
  'https://lh3.googleusercontent.com/p/AF1QipOjr56OwPJryVaAzxRTPo_haQHEbnHQ6bF_Ycxk=w1920-h1080-k-no',
  'https://lh3.googleusercontent.com/p/AF1QipMiM831fJAlLFK77z89a-TEr9cDdrmc6L903396=w1920-h1080-k-no',
  'https://lh3.googleusercontent.com/p/AF1QipOpOuVlRvBdtiDmDgeybJPJ90te4sEYivCyHImN=w1920-h1080-k-no',
  'https://lh3.googleusercontent.com/p/AF1QipOwrHCbqu_vztMZJsWDBEt2UzhAoZ52naNg4AVm=w1920-h1080-k-no',
  'https://lh3.googleusercontent.com/p/AF1QipNjGXU3pyfXuBvuS0qP8dNwEjwuofYuW9cLB84m=w1920-h1080-k-no',
  'https://lh3.googleusercontent.com/p/AF1QipMMgkxFMF6TLG459wHM6LfUGvNfAPmihM6F5d2x=w1920-h1080-k-no',
  'https://lh3.googleusercontent.com/p/AF1QipNKfaL0EZeCHxpcx0-65EdAfuURlJKgRj_ndm9j=w1920-h1080-k-no',
  'https://lh3.googleusercontent.com/p/AF1QipNUj6RlE-Lb0Na8aDraH2xnDb5_s0Zpsb3GcZZs=w1920-h1080-k-no',
  'https://lh3.googleusercontent.com/p/AF1QipOQVrG9BWc4GOrxgZsm9_hQ01A8s2GomrdjAHWj=w1920-h1080-k-no',
  'https://lh3.googleusercontent.com/p/AF1QipMf6wJl7c2tmQskDRDXeNaDLjFZcB0DPucnWfvx=w1920-h1080-k-no',
  'https://lh3.googleusercontent.com/p/AF1QipMF1CDteA-1gI46LN_JS7Ze3xa8Ea3gZs5npNi-=w1920-h1080-k-no',
  'https://lh3.googleusercontent.com/p/AF1QipN5He7tOd5znlTzuCZ5W4C17P4jm27_ATLVkeGM=w1920-h1080-k-no',
  'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=NPGCipwLHyrX-T2ckYRZlw&cb_client=unknown_client.gws.gps&w=203&h=100&yaw=236.96721&pitch=0&thumbfov=100'
];

export default function GalleryPage() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => {
        if (data.images && data.images.length > 0) {
          setImages(data.images.filter(item => item && item.link).map(item => item.link));
        } else {
          setImages(fallbackImageLinks);
        }
      })
      .catch(() => {
        setImages(fallbackImageLinks);
      });
  }, []);

  return (
    <>
      <PageHeader 
        subtitle="Portfolio"
        title="Clinical Excellence Gallery"
        description="Explore our modern clinic environment and see the results of our specialized dental treatments."
      />
      
      <section id="section-gallery" className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {images.map((img, index) => (
              <a 
                key={index} 
                href={img} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative block aspect-[4/3] rounded-[32px] overflow-hidden shadow-2xl shadow-blue-900/5 ring-1 ring-black/5 hover:-translate-y-2 transition-all duration-500"
              >
                <img 
                  src={img} 
                  alt={`Clinic Gallery ${index}`} 
                  className="w-full h-full object-cover transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#0c244c] transform scale-50 group-hover:scale-100 transition-transform duration-500 shadow-xl">
                    <i className="fa fa-search-plus text-xl"></i>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
