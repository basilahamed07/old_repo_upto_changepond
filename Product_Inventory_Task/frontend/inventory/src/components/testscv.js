import React from 'react';
import * as XLSX from 'xlsx';

const ParticipantExport = () => {
    const participants = [
        {
            participantName: "John Doe",
            designation: "Developer",
            email: "john@example.com",
            dimension: "Technical",
            subDimension: "Frontend",
            rating: "5",
            questions: [
                { question: "What is your favorite programming language?", answer: "JavaScript", comments: "" },
                { question: "Do you prefer working remotely?", answer: "Yes", comments: "More productive at home" }
            ]
        },
        {
            participantName: "Jane Smith",
            designation: "Manager",
            email: "jane@example.com",
            dimension: "Management",
            subDimension: "Team Management",
            rating: "4",
            questions: [
                { question: "What project management tools do you use?", answer: "Trello", comments: "" },
                { question: "Do you enjoy team meetings?", answer: "Yes", comments: "They are essential for collaboration" }
            ]
        },
        {
            participantName: "Alice Johnson",
            designation: "Designer",
            email: "alice@example.com",
            dimension: "Creative",
            subDimension: "UI/UX",
            rating: "5",
            questions: [
                { question: "What is your favorite design software?", answer: "Figma", comments: "" },
                { question: "Do you prefer working in a team?", answer: "No", comments: "I focus better alone" }
            ]
        }
    ];

    const exportToExcel = (participant) => {
        const workbook = XLSX.utils.book_new();
        const wsData = [];

        // Company Name Row (merging A1:F1)
        wsData.push(["ChangePond Technologies", "", "", "", "", ""]);
        wsData.push([""]); // Empty row for spacing

        // Test Survey Row (merging A3:F3)
        wsData.push(["Test Survey"]);
        wsData.push([""]); // Empty row for spacing

        // Participant Info Table Header
        wsData.push([
            "Participant Name",
            "Designation",
            "Email ID",
            "Dimension",
            "Sub Dimension",
            "Participant Rating"
        ]);

        // Participant Data Row
        wsData.push([
            participant.participantName,
            participant.designation,
            participant.email,
            participant.dimension,
            participant.subDimension,
            participant.rating
        ]);

        // Add empty row for spacing
        wsData.push([""]);

        // Questions Header Row
        wsData.push(["Questions"]);
        wsData.push([""]); // Empty row for spacing

        // Questions Detail Header Row
        wsData.push(["S No #", "Questions", "Selected Answers", "Comments (if available)"]);

        // Questions Detail Rows
        participant.questions.forEach((question, index) => {
            wsData.push([
                index + 1,
                question.question,
                question.answer,
                question.comments
            ]);
        });

        // Create worksheet and add to workbook
        const worksheet = XLSX.utils.aoa_to_sheet(wsData);
        XLSX.utils.book_append_sheet(workbook, worksheet, "Survey Data");

        // Merge cells for the company name and test survey
        worksheet['!merges'] = [
            { s: { r: 0, c: 0 }, e: { r: 0, c: 5 } }, // Merges A1:F1
            { s: { r: 2, c: 0 }, e: { r: 2, c: 5 } }  // Merges A3:F3
        ];

        // Function to ensure cell exists
        const ensureCell = (cellRef) => {
            if (!worksheet[cellRef]) {
                worksheet[cellRef] = {};
            }
        };

        // Set cell styles (bold, center align, and borders)
        const boldCenterAlign = { font: { bold: true }, alignment: { horizontal: 'center' }, border: {} };

        // Apply styles to company name
        ensureCell('A1');
        worksheet['A1'].s = boldCenterAlign;  // ChangePond Technologies

        ensureCell('A3');
        worksheet['A3'].s = boldCenterAlign;  // Test Survey

        // Apply styles to the header row (A5:F5)
        const headers = ["A5", "B5", "C5", "D5", "E5", "F5"];
        headers.forEach(cell => {
            ensureCell(cell);
            worksheet[cell].s = { ...boldCenterAlign, border: getBorders() };  // Header row
        });

        // Apply styles to the participant data row
        const participantRow = ["A6", "B6", "C6", "D6", "E6", "F6"];
        participantRow.forEach(cell => {
            ensureCell(cell);
            worksheet[cell].s = { border: getBorders() };  // Participant row
        });

        // Apply styles to questions header row
        const questionsHeader = ["A8", "B8", "C8", "D8"];
        questionsHeader.forEach(cell => {
            ensureCell(cell);
            worksheet[cell].s = { ...boldCenterAlign, border: getBorders() };  // Questions header row
        });

        // Apply styles to questions detail rows
        for (let i = 0; i < participant.questions.length; i++) {
            const questionRow = 9 + i; // Starting from the 9th row
            ensureCell(`A${questionRow}`);
            ensureCell(`B${questionRow}`);
            ensureCell(`C${questionRow}`);
            ensureCell(`D${questionRow}`);
            worksheet[`A${questionRow}`].s = { border: getBorders() };
            worksheet[`B${questionRow}`].s = { border: getBorders() };
            worksheet[`C${questionRow}`].s = { border: getBorders() };
            worksheet[`D${questionRow}`].s = { border: getBorders() };
        }

        // Write to file
        XLSX.writeFile(workbook, `${participant.participantName}_survey.xlsx`);
    };

    // Function to define borders
    const getBorders = () => {
        return {
            top: { style: "thin", color: { rgb: "000000" } },
            bottom: { style: "thin", color: { rgb: "000000" } },
            left: { style: "thin", color: { rgb: "000000" } },
            right: { style: "thin", color: { rgb: "000000" } }
        };
    };

    return (
        <div>
            <h1>Participant Details</h1>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Participant Name</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Designation</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Email ID</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Dimension</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Sub Dimension</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Participant Rating</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Export</th>
                    </tr>
                </thead>
                <tbody>
                    {participants.map(participant => (
                        <tr key={participant.participantName}>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{participant.participantName}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{participant.designation}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{participant.email}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{participant.dimension}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{participant.subDimension}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{participant.rating}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                                <button onClick={() => exportToExcel(participant)}>Export</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ParticipantExport;
