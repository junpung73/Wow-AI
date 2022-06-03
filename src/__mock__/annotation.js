import { v4 as uuidv4 } from 'uuid';

export default [
    {
        id: uuidv4(),
        title: 'Image data annotation',
        img1: '/images/annotation/SemanticSegmentation5.png',
        img2: '/images/annotation/Named-entityrecognition2.png',
        img3: '/images/annotation/SoundLabeling2.png',
        boxst: [
            {
                title: '',
                description: 'Classify each pixel in an image or video frame into the segments necessary for your machine vision algorithm to identify different entities.',
            },
            {
                title: '3D Bounding Boxes / Cuboids 3D',
                description: 'Classify each pixel in an image or video frame into the segments necessary for your machine vision algorithm to identify different entities.',
            },
            {
                title: 'Tagging',
                description: 'Classify each pixel in an image or video frame into the segments necessary for your machine vision algorithm to identify different entities.',
            },
            {
                title: 'Polygons',
                description: 'Classify each pixel in an image or video frame into the segments necessary for your machine vision algorithm to identify different entities.',
            },
            {
                title: 'Image Classification',
                description: 'Classify each pixel in an image or video frame into the segments necessary for your machine vision algorithm to identify different entities.',
            },
        ]
    },
    {
        id: uuidv4(),
        title: 'Text data annotation ',
        img1: '/images/annotation/Named-entityrecognition2.png',
        img2: '/images/annotation/SemanticSegmentation4.png',
        img3: '/images/annotation/SoundLabeling2.png',
        boxst: [
            {
                title: '',
                description: 'Optical Character Recognition (OCR) is taking all of the images of texts, regardless of whether they were printed, handwritten or typed into editable text formats. Such text recognition software is already being used across industries such as banking, legal, healthcare and many others. ',
            },
            {
                title: 'Classification and categorization',
                description: 'Optical Character Recognition (OCR) is taking all of the images of texts, regardless of whether they were printed, handwritten or typed into editable text formats. Such text recognition software is already being used across industries such as banking, legal, healthcare and many others. ',
            },
            {
                title: 'Tagging',
                description: 'Optical Character Recognition (OCR) is taking all of the images of texts, regardless of whether they were printed, handwritten or typed into editable text formats. Such text recognition software is already being used across industries such as banking, legal, healthcare and many others. ',
            },
            {
                title: 'Sentiment analysis',
                description: 'Optical Character Recognition (OCR) is taking all of the images of texts, regardless of whether they were printed, handwritten or typed into editable text formats. Such text recognition software is already being used across industries such as banking, legal, healthcare and many others. ',
            },
        ]
    },
    {
        id: uuidv4(),
        title: 'Audio data annotation',
        img1: '/images/annotation/SoundLabeling2.png',
        img2: '/images/annotation/Named-entityrecognition2.png',
        img3: '/images/annotation/SemanticSegmentation5.png',
        boxst: [
            {
                title: '',
                description: 'Sound labeling involves the separation of all of the needed sounds and labeling them. These could be specific terms or the sound of a specific musical instrument, for example.',
            },
            {
                title: 'Event Tracking',
                description: 'Sound labeling involves the separation of all of the needed sounds and labeling them. These could be specific terms or the sound of a specific musical instrument, for example.',
            },
            {
                title: 'Speech to Text Transcription',
                description: 'Sound labeling involves the separation of all of the needed sounds and labeling them. These could be specific terms or the sound of a specific musical instrument, for example.',
            },
            {
                title: 'Audio Classification',
                description: 'Sound labeling involves the separation of all of the needed sounds and labeling them. These could be specific terms or the sound of a specific musical instrument, for example.',
            },
        ]
    },
    {
        id: uuidv4(),
        title: 'Video data annotation',
        img1: '/images/annotation/SemanticSegmentation4.png',
        img2: '/images/annotation/SemanticSegmentation5.png',
        img3: '/images/annotation/Named-entityrecognition2.png',
        boxst: [
            {
                title: '',
                description: "This annotation technique involves projecting a rectangular 2D box over each frame's target object, which assists the system in recognizing the real things. This technology is commonly used in the automotive, security & entertainment, and media sectors to analyze the footage.",
            },
            {
                title: '3D Boxes',
                description: "This annotation technique involves projecting a rectangular 2D box over each frame's target object, which assists the system in recognizing the real things. This technology is commonly used in the automotive, security & entertainment, and media sectors to analyze the footage.",
            },
            {
                title: 'Polygons',
                description: "This annotation technique involves projecting a rectangular 2D box over each frame's target object, which assists the system in recognizing the real things. This technology is commonly used in the automotive, security & entertainment, and media sectors to analyze the footage.",
            },
            {
                title: 'Labeling / Tagging',
                description: "This annotation technique involves projecting a rectangular 2D box over each frame's target object, which assists the system in recognizing the real things. This technology is commonly used in the automotive, security & entertainment, and media sectors to analyze the footage.",
            },
            {
                title: 'Classification / Categorization',
                description: "This annotation technique involves projecting a rectangular 2D box over each frame's target object, which assists the system in recognizing the real things. This technology is commonly used in the automotive, security & entertainment, and media sectors to analyze the footage.",
            },
        ]
    }
]