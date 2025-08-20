import React from 'react'

const FormPage = () => {
  return (
    <div className="container mx-auto py-16 px-8 min-h-[calc(100vh-80px)]">
      <div className="bg-white p-12 rounded-2xl shadow-xl border border-gray-200">
        <h2 className="text-4xl font-bold text-blue-700 mb-8 text-center">
          แบบประเมินสุขภาพจิต
        </h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          ส่วนนี้จะประกอบด้วยแบบประเมินสุขภาพจิตต่างๆ ที่ออกแบบมาเพื่อช่วยให้คุณเข้าใจสภาพอารมณ์และจิตใจของตนเองได้ดียิ่งขึ้น
          โปรดทราบว่าผลลัพธ์จากแบบประเมินนี้มีวัตถุประสงค์เพื่อเป็นข้อมูลเบื้องต้นเท่านั้น
          และไม่สามารถใช้แทนการวินิจฉัยจากผู้เชี่ยวชาญได้
        </p>
        <ul className="list-disc list-inside text-gray-600 text-lg space-y-3">
          <li>แบบประเมินความเครียด (ST5)</li>
          <li>แบบประเมินภาวะซึมเศร้า (PHQ-9)</li>
          <li>แบบประเมินภาวะวิตกกังวล (GAD-7)</li>
          <li>แบบประเมินความสุข (TMHI)</li>
        </ul>
        <div className="mt-10 p-6 bg-blue-50 rounded-lg border border-blue-200 text-blue-800">
          <p className="font-semibold">
            หากคุณรู้สึกไม่สบายใจอย่างรุนแรง หรือต้องการความช่วยเหลือเร่งด่วน
            โปรดติดต่อสายด่วนสุขภาพจิตทันที
          </p>
        </div>
      </div>
    </div>
  )
}

export default FormPage