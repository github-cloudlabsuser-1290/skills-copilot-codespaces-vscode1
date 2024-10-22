import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function MarkdownEditor() {
    const [markdown, setMarkdown] = useState("type markdown here");

    const handleChange = (event) => {
        setMarkdown(event.target.value);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
            <textarea
                value={markdown}
                onChange={handleChange}
                rows="10"
                cols="50"
                style={{ marginBottom: '20px', padding: '10px', fontSize: '16px' }}
            />
            <div style={{ border: '1px solid #ddd', padding: '20px', width: '100%', maxWidth: '600px' }}>
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
        </div>
    );
}
function reverseSentence(sentence) {
    return sentence
        .split(' ')
        .reverse()
        .join(' ')
        .replace(/^\w/, (c) => c.toUpperCase());
}

// Example usage:
const inputSentence = "hello world from github copilot";
const reversedSentence = reverseSentence(inputSentence);
console.log(reversedSentence); // Output: "Copilot github from world hello"