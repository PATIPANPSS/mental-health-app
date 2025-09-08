import React, { useState } from "react";

const questions = [
  "1. เบื่อ ไม่สนใจ ไม่สนุกกับสิ่งที่เคยชอบ",
  "2. ไม่สบายใจ ซึมเศร้า หรือท้อแท้",
  "3. หลับยาก หรือหลับๆ ตื่นๆ หรือหลับมากไป",
  "4. เหนื่อยง่าย หรือไม่ค่อยมีแรง",
  "5. เบื่ออาหาร หรือกินได้น้อยลง หรือกินมากขึ้น",
  "6. รู้สึกไม่ดีกับตัวเอง คิดว่าตัวเองล้มเหลว หรือทำให้ตนเองและครอบครัวผิดหวัง",
  "7. สมาธิไม่ดี เวลาทำอะไร เช่น ดูโทรทัศน์ หรือฟังวิทยุ",
  "8. ทำอะไรช้าลง กระสับกระส่าย อยู่ไม่สุข",
  "9. คิดทำร้ายตัวเอง หรืออยากตาย",
];

const options = [
  { text: "ไม่มีเลย", value: 0 },
  { text: "เป็นบางวัน", value: 1 },
  { text: "เป็นบ่อย", value: 2 },
  { text: "เป็นทุกวัน", value: 3 },
];

const results = [
  {
    score: 0,
    text: "ไม่มีมีอาการของโรคซึมเศร้าในระดับน้อยมาก",
    color: "text-green-600",
  },
  {
    score: 7,
    text: "มีความเสี่ยงที่จะเป็นโรคซึมเศร้าในระดับน้อย ควรปรึกษาผู้เชี่ยวชาญหากอาการยังคงอยู่",
    color: "text-yellow-600",
  },
  {
    score: 13,
    text: "มีความเสี่ยงที่จะเป็นโรคซึมเศร้าในระดับปานกลาง ควรปรึกษาแพทย์หรือนักจิตวิทยาเพื่อประเมินและวินิจฉัย",
    color: "text-orange-600",
  },
  {
    score: 19,
    text: "มีความเสี่ยงสูงที่จะเป็นโรคซึมเศร้าในระดับรุนแรง ควรเข้ารับการประเมินจากผู้เชี่ยวชาญโดยเร็วที่สุด",
    color: "text-red-600",
  },
];

const getResultText = (totalScore) => {
  if (totalScore <= 6) return results[0];
  if (totalScore <= 12) return results[1];
  if (totalScore <= 18) return results[2];
  return results[3];
};

const Form9q = () => {
  const [answers, setAnswers] = useState(Array(9).fill(0));
  const [showResult, setShowResult] = useState(false);
  const [totalScore, setTotalScore] = useState(0);

  const handleChange = (questionIndex, value) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const score = answers.reduce((sum, current) => sum + current, 0);
    setTotalScore(score);
    setShowResult(true);
  };

  const handleReset = () => {
    setAnswers(Array(9).fill(0));
    setShowResult(false);
    setTotalScore(0);
  };

  const result = getResultText(totalScore);

  return (
    <div className="container mx-auto py-16 px-8 min-h-[calc(100vh-80px)]">
      <div className="bg-white p-12 rounded-2xl shadow-xl border border-gray-200">
        <h2 className="text-4xl font-bold text-blue-700 mb-2 text-center">
          แบบประเมินภาวะซึมเศร้า 9Q
        </h2>
        <p className="text-xl text-gray-700 mb-8">
          ในช่วง 2 สัปดาห์ที่ผ่านมารวมวันนี้ ท่านมีอาการเหล่านี้บ่อยแค่ไหน?
        </p>

        {showResult ? (
          <div className="text-center mt-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              ผลการประเมินของคุณ
            </h3>
            <p className={`text-5xl font-extrabold ${result.color} mb-4`}>
              {totalScore} <span className="text-gray-800 text-3xl">คะแนน</span>
            </p>
            <p className={`text-2xl font-semibold ${result.color} mb-6`}>
              {result.emoji} {result.text}
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              **คำแนะนำ:** แบบประเมินนี้เป็นเพียงการคัดกรองเบื้องต้น
              ไม่สามารถใช้แทนการวินิจฉัยของแพทย์ได้ หากคุณรู้สึกไม่สบายใจ
              หรือไม่มั่นใจในผลลัพธ์ ควรปรึกษาผู้เชี่ยวชาญด้านสุขภาพจิต
            </p>
            <button
              onClick={handleReset}
              className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300"
            >
              ทำแบบประเมินอีกครั้ง
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="space-y-8">
              {questions.slice(0).map((q, qIndex) => (
                <div
                  key={qIndex}
                  className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200"
                >
                  <p className="text-xl font-medium text-gray-700 mb-4">{q}</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                    {options.map((opt, oIndex) => (
                      <label
                        key={oIndex}
                        className="flex items-center space-x-2 p-3 rounded-lg border border-gray-300 transition-all duration-200 cursor-pointer hover:bg-gray-200"
                      >
                        <input
                          type="radio"
                          name={`question-${qIndex}`}
                          value={opt.value}
                          checked={answers[qIndex] === opt.value}
                          onChange={() => handleChange(qIndex, opt.value)}
                          className="form-radio h-5 w-5 text-blue-600 focus:ring-blue-500"
                          required
                        />
                        <span className="text-lg text-gray-800">
                          {opt.text}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-800 hover:bg-blue-900 text-white font-bold py-4 px-6 rounded-lg shadow-md transition duration-300 hover:scale-105 text-xl"
            >
              ส่งแบบประเมิน
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Form9q;
