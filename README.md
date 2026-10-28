# TrainWise AI – Deep Learning – Natural Language Processing

## Project Overview

TrainWise AI is a deep learning and Natural Language Processing (NLP) based system designed to evaluate the quality of training materials before they are shared with students or interns. It analyzes documents such as PDF files, PowerPoint presentations, syllabi, learning objectives, and quiz questions to identify repeated explanations, underrepresented topics, and possible mismatches between training content and assessments.

The system uses transformer-based text embeddings and semantic similarity to compare the meaning of document sections and provide evidence-based findings to help trainers improve their learning materials.

## Problem Statement

Training materials may contain repeated explanations, incomplete coverage of learning objectives, or assessment questions that are not adequately supported by the provided content. Reviewing large collections of documents manually can be time-consuming. TrainWise AI aims to support this review process through automated text extraction and semantic analysis.

## Key Features

- **Document Processing:** Extracts text from PDF and PowerPoint training materials.
- **Semantic Repetition Detection:** Identifies potentially repeated or highly similar explanations.
- **Topic Coverage Analysis:** Compares training content with supplied syllabus topics and learning objectives.
- **Assessment Alignment:** Checks whether quiz questions appear to align with the training content.
- **Quality Reporting:** Organizes findings and recommendations for trainer review.
- **Web Interface:** Provides a user interface for uploading materials and reviewing analysis results.

## How It Works

1. Upload training documents and, optionally, a syllabus, learning objectives, or quiz questions.
2. Extract and prepare text from the supported documents.
3. Generate text embeddings and compare content using semantic similarity.
4. Analyze repetition, topic coverage, and assessment alignment.
5. Review the findings, source references, and recommendations in the report.

## Technology Stack

- **Programming Language:** Python
- **Backend:** FastAPI
- **Frontend:** React, TypeScript, HTML, CSS
- **NLP / Deep Learning:** Sentence Transformers
- **PDF Processing:** PyMuPDF
- **PowerPoint Processing:** python-pptx
- **Similarity Analysis:** Cosine similarity
- **Database:** SQLite and SQLAlchemy

## Project Structure

The exact structure depends on the files included in the project repository. A typical structure may look like this:

```text
TrainWise-AI/
├── backend/
│   ├── main.py
│   ├── routes/
│   ├── services/
│   └── requirements.txt
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── index.html
├── README.md
├── .gitignore
└── .env.example
