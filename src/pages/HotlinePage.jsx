import React from 'react'

const HotlinePage = () => {
  return (
    <div className="container mx-auto py-16 px-8 min-h-[calc(100vh-80px)]">
      <div className="bg-white p-12 rounded-2xl shadow-xl border border-gray-200">
        <h2 className="text-4xl font-bold text-blue-900 mb-8 text-center">
          สายด่วนสุขภาพจิต
        </h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          เมื่อคุณต้องการความช่วยเหลือหรือการสนับสนุนเร่งด่วน
          โปรดอย่าลังเลที่จะติดต่อสายด่วนสุขภาพจิตเหล่านี้
          ผู้เชี่ยวชาญพร้อมที่จะรับฟังและให้คำปรึกษาตลอด 24 ชั่วโมง
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <div className="p-8 bg-blue-50 rounded-xl shadow-md border border-blue-200">
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">
              กรมสุขภาพจิต
            </h3>
            <p className="text-4xl font-extrabold text-blue-800 mb-4">
              1323
            </p>
            <p className="text-gray-600">สายด่วนสุขภาพจิตตลอด 24 ชั่วโมง</p>
          </div>
          <div className="p-8 bg-teal-50 rounded-xl shadow-md border border-teal-200">
            <h3 className="text-2xl font-semibold text-teal-800 mb-4">
              Samaritans Thailand
            </h3>
            <p className="text-4xl font-extrabold text-teal-700 mb-4">
              02-713-6791
            </p>
            <p className="text-gray-600">
              ทุกวันจันทร์ - อาทิตย์ เวลา 12:00 - 22:00 น.
            </p>
          </div>
          <div className="p-8 bg-red-50 rounded-xl shadow-md border border-red-200 col-span-1 md:col-span-2">
            <h3 className="text-2xl font-semibold text-red-800 mb-4">
              กรณีฉุกเฉิน
            </h3>
            <p className="text-lg text-gray-700">
              หากคุณหรือคนที่คุณรู้จักกำลังประสบกับวิกฤตสุขภาพจิตร้ายแรงและต้องการความช่วยเหลือฉุกเฉิน
              โปรดติดต่อ{' '}
              <span className="font-bold text-red-700">โรงพยาบาลที่ใกล้ที่สุด</span>
              {' '}หรือบริการฉุกเฉินในพื้นที่ทันที
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HotlinePage