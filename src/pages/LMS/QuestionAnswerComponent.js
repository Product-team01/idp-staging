import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import certificateTemplate from './certificate-template.png';
import './QuestionAnswerComponent.css';

const QuestionAnswerComponent = ({ question, options, correctAnswer }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);

  const handleSubmit = () => {
    if (selectedAnswer === correctAnswer) {
      setIsCorrect(true);
      generateCertificate(name, email, company);
    } else {
      setIsCorrect(false);
      alert('Incorrect answer. Please try again.');
    }
  };

  const generateCertificate = (recipientName, email, company) => {
    const input = document.getElementById('certificate-container');
    input.style.display = 'block'; // Show the certificate container
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0, 210, 297); // Adjust the width and height as per your certificate template
      pdf.save('certificate.pdf');
      input.style.display = 'none'; // Hide the certificate container again
    });
  };

  return (
    <div className="question-answer-container">
      <h1>Question and Answer Section</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      <div>
        <p>{question}</p>
        {options.map((option, index) => (
          <label key={index}>
            <input
              type="radio"
              value={option}
              checked={selectedAnswer === option}
              onChange={(e) => setSelectedAnswer(e.target.value)}
            />
            {option}
          </label>
        ))}
      </div>
      <button onClick={handleSubmit}>Submit</button>
      {isCorrect && <p>Congratulations! You answered correctly.</p>}
      <div id="certificate-container" style={{ position: 'relative', width: '800px', height: '600px', margin: '0 auto' }}>
        <img src={certificateTemplate} alt="Certificate" style={{ width: '100%', height: '100%' }} />
        <div style={{ position: 'absolute', top: '200px', left: '50%', transform: 'translateX(-50%)', fontSize: '24px' }}>{name}</div>
        <div style={{ position: 'absolute', top: '250px', left: '50%', transform: 'translateX(-50%)', fontSize: '24px' }}>{company}</div>
        <div style={{ position: 'absolute', top: '300px', left: '50%', transform: 'translateX(-50%)', fontSize: '24px' }}>{new Date().toLocaleDateString()}</div>
        <div style={{ position: 'absolute', top: '350px', left: '50%', transform: 'translateX(-50%)', fontSize: '24px' }}>Signature</div>
      </div>
    </div>
  );
};

export default QuestionAnswerComponent;
