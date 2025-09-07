import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Form2q = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({
    q1: null,
  });

  const [result, setResult] = useState(null);

  const questions = [
    { id: 'q1', text: 'ใน 2 สัปดาห์ที่ผ่านมา รวมวันนี้ ท่านรู้สึก หดหู่ เศร้า หรือท้อแท้สิ้นหวัง หรือไม่' },
  ];

  const handleChange = (questionId, value) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // ตรวจสอบว่าผู้ใช้ตอบครบทุกคำถามหรือไม่
    if (Object.values(answers).some(answer => answer === null)) {
      setResult('กรุณาตอบคำถามให้ครบทุกข้อ');
      return;
    }

    // ตรวจสอบผลลัพธ์
    if (answers.q1 === 'yes') {
      setResult('ท่านมีแนวโน้มเป็นโรคซึมเศร้า');
    } else {
      setResult('ขอแสดงความยินดีด้วย คุณไม่มีแนวโน้มเป็นโรคซึมเศร้าค่ะ');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full bg-white p-8 rounded-xl shadow-2xl space-y-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-6">
          แบบคัดกรองโรคซึมเศร้า (2Q)
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {questions.map((question, index) => (
            <div key={question.id} className="p-6 bg-gray-50 rounded-lg shadow-md border border-gray-200">
              <p className="text-lg font-medium text-gray-800 mb-4">{`${index + 1}. ${question.text}`}</p>
              <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                <button
                  type="button"
                  onClick={() => handleChange(question.id, 'yes')}
                  className={`flex-1 px-6 py-3 rounded-lg border-2 font-semibold transition-all duration-200 ease-in-out
                    ${answers[question.id] === 'yes'
                      ? 'bg-blue-600 text-white border-blue-600 scale-105 shadow-lg'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-50 hover:border-blue-500'}`
                  }
                >
                  มี
                </button>
                <button
                  type="button"
                  onClick={() => handleChange(question.id, 'no')}
                  className={`flex-1 px-6 py-3 rounded-lg border-2 font-semibold transition-all duration-200 ease-in-out
                    ${answers[question.id] === 'no'
                      ? 'bg-blue-600 text-white border-blue-600 scale-105 shadow-lg'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-50 hover:border-blue-500'}`
                  }
                >
                  ไม่มี
                </button>
              </div>
            </div>
          ))}

          <button
            type="submit"
            className="w-full flex justify-center py-4 px-6 border border-transparent rounded-lg shadow-sm text-xl font-bold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            ส่งแบบประเมิน
          </button>
        </form>

        {result && (
          <div className="mt-8 p-8 bg-blue-50 rounded-xl shadow-lg border-4 border-blue-200 text-center">
            <h3 className="text-2xl font-bold text-blue-800 mb-2">ผลลัพธ์การคัดกรอง</h3>
            <p className={`text-xl font-medium`}>{result}</p>
            {result === 'ท่านมีแนวโน้มเป็นโรคซึมเศร้า' && (
              <div className="mt-4">
                <p className="text-lg text-gray-600">
                  <span className="font-semibold">ข้อแนะนำ:</span> ควรทำแบบประเมิน 9Q เพื่อให้ได้ผลลัพธ์ที่แม่นยำยิ่งขึ้น
                </p>
                <Link to="/assessments/9q" className="mt-2 inline-block px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-300 ease-in-out">
                  ทำแบบประเมิน 9Q
                </Link>
              </div>
            )}
            {result === 'ขอแสดงความยินดีด้วย คุณไม่มีแนวโน้มเป็นโรคซึมเศร้าค่ะ' && (
              <div className="mt-4">
                <p className="text-lg text-gray-600">
                  <span className="font-semibold">คำแนะนำ:</span> สุขภาพจิตของคุณอยู่ในเกณฑ์ปกติ
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Form2q