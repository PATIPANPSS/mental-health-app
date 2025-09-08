import React, { useState } from "react";

const questions = [
  {
    text: "1. คิดอยากตาย หรือ คิดว่าตายไปเสียดีกว่า",
    scores: { no: 0, yes: 1 },
  },
  {
    text: "2. อยากทำร้ายตัวเอง หรือ ทำให้ตัวเองบาดเจ็บ",
    scores: { no: 0, yes: 2 },
  },
  { text: "3. คิดเกี่ยวกับการฆ่าตัวตาย", scores: { no: 0, yes: 6 } },
  {
    text: "4. ท่านสามารถควบคุมความอยากฆ่าตัวตายที่ท่านคิดอยู่นั้นได้หรือไม่ หรือบอกได้ไหมว่าจะไม่ทำตามความคิดนั้นในขณะนี้",
    scores: { no: 0, yes: 8 },
  },
  { text: "5. มีแผนการที่จะฆ่าตัวตาย", scores: { no: 0, yes: 8 } },
  {
    text: "6. ได้เตรียมการที่จะทำร้ายตนเองหรือเตรียมการจะฆ่าตัวตายโดยตั้งใจว่าจะให้ตายจริงๆ",
    scores: { no: 0, yes: 9 },
  },
  {
    text: "7. ได้ทำให้ตนเองบาดเจ็บแต่ไม่ตั้งใจที่จะทำให้เสียชีวิต",
    scores: { no: 0, yes: 4 },
  },
  {
    text: "8. ได้พยายามฆ่าตัวตายโดยคาดหวัง/ตั้งใจที่จะให้ตาย",
    scores: { no: 0, yes: 10 },
  },
];

const getResultText = (totalScore) => {
  if (totalScore === 0) {
    return { text: "ไม่มีแนวโน้มฆ่าตัวตายในปัจจุบัน", color: "text-green-600" };
  } else if (totalScore >= 1 && totalScore <= 8) {
    return {
      text: "คุณมีแนวโน้มที่จะฆ่าตัวตายในปัจจุบัน ระดับน้อย",
      color: "text-yellow-600",
    };
  } else if (totalScore >= 9 && totalScore <= 16) {
    return {
      text: "คุณมีแนวโน้มที่จะฆ่าตัวตายในปัจจุบัน ระดับปานกลาง",
      color: "text-orange-600",
    };
  } else {
    return {
      text: "คุณมีแนวโน้มที่จะฆ่าตัวตายในปัจจุบัน ระดับรุนแรง เราแนะนำให้เข้าพบจิตแพทย์โดยด่วน",
      color: "text-red-600",
    };
  }
};

const Form8q = () => {
  const [answers, setAnswers] = useState(
    Array(questions.length).fill({ value: "ไม่มี", score: 0 })
  );
  const [showResult, setShowResult] = useState(false);
  const [totalScore, setTotalScore] = useState(0);

  const handleChange = (questionIndex, optionText, optionScore) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = { value: optionText, score: optionScore };
    setAnswers(newAnswers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const score = answers.reduce((sum, current) => sum + current.score, 0);
    setTotalScore(score);
    setShowResult(true);
  };

  const handleReset = () => {
    setAnswers(Array(questions.length).fill({ value: "ไม่มี", score: 0 }));
    setShowResult(false);
    setTotalScore(0);
  };

  const result = getResultText(totalScore);

  return (
    <div className="container mx-auto py-16 px-8 min-h-[calc(100vh-80px)]">
      <div className="bg-white p-12 rounded-2xl shadow-xl border border-gray-200">
        <h2 className="text-4xl font-bold text-blue-900 mb-2 text-center">
          แบบประเมินการฆ่าตัวตาย 8Q
        </h2>
        <p className="text-lg w-3xl mx-auto text-gray-700 mb-8 text-center leading-relaxed">
          การทดสอบนี้ควรใช้สำหรับการคัดกรองและติดตามความรุนแรงของอาการ
          และไม่สามารถแทนการประเมิน และวินิจฉัยทางคลินิกได้
          <span className="font-bold"> กรุณาเลือกตอบโดยอิงจากความรู้สึกในช่วงสองสัปดาห์ที่ผ่านมา.</span>
        </p>

        {showResult ? (
          <div className="text-center mt-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              ผลการประเมินของคุณ
            </h3>
            <p className={`text-5xl font-extrabold ${result.color} mb-4`}>
              {totalScore} <span className="text-black text-3xl">คะแนน</span>
            </p>
            <p className={`text-2xl font-semibold ${result.color} mb-6`}>
              {result.emoji} {result.text}
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              **คำแนะนำ:** แบบประเมินนี้เป็นเพียงการคัดกรองเบื้องต้น
              ไม่สามารถใช้แทนการวินิจฉัยของแพทย์ได้
              หากคุณมีความคิดที่จะทำร้ายตัวเอง หรือรู้สึกไม่สบายใจอย่างรุนแรง
              ควรขอความช่วยเหลือจากผู้เชี่ยวชาญทันที
            </p>
            <button
              onClick={handleReset}
              className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out"
            >
              ทำแบบประเมินอีกครั้ง
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="space-y-8">
              {questions.map((q, qIndex) => (
                <div
                  key={qIndex}
                  className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200"
                >
                  <p className="text-xl font-medium text-gray-700 mb-4">
                    {q.text}
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <label className="flex items-center space-x-2 p-3 rounded-lg border border-gray-300 transition-all duration-200 cursor-pointer hover:bg-gray-200">
                      <input
                        type="radio"
                        name={`question-${qIndex}`}
                        checked={answers[qIndex].value === "มี"}
                        onChange={() =>
                          handleChange(qIndex, "มี", q.scores.yes)
                        }
                        className="form-radio h-5 w-5 text-blue-600 focus:ring-blue-500"
                        required
                      />
                      <span className="text-lg text-gray-800">มี</span>
                    </label>
                    <label className="flex items-center space-x-2 p-3 rounded-lg border border-gray-300 transition-all duration-200 cursor-pointer hover:bg-gray-200">
                      <input
                        type="radio"
                        name={`question-${qIndex}`}
                        checked={answers[qIndex].value === "ไม่มี"}
                        onChange={() =>
                          handleChange(qIndex, "ไม่มี", q.scores.no)
                        }
                        className="form-radio h-5 w-5 text-blue-600 focus:ring-blue-500"
                        required
                      />
                      <span className="text-lg text-gray-800">ไม่มี</span>
                    </label>
                  </div>
                </div>
              ))}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-800 hover:bg-blue-900 text-white font-bold py-4 px-6 rounded-lg shadow-md transition duration-300 ease-in-out text-xl"
            >
              ส่งแบบประเมิน
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Form8q;
