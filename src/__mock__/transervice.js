import { v4 as uuidv4 } from 'uuid';

export default [
    {
        id: uuidv4(), 
        img: '/images/transaction/Audio_transcription.webp', 
        title: 'Audio Transcription',
        description: 'Audio transcription is the process of converting spoken language into written language. This is what we do best.',
    }, 
    {
        id: uuidv4(),
        img: '/images/transaction/Image_transcription.webp',
        title: 'Image Transcription',
        description: 'Do you want to create captions and extract text from images to build datasets for ML models such as OCR (optical character recognition) models? Such text recognition software is already being used across industries such as banking, legal, healthcare, and many others.',
    },
]