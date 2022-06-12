import { v4 as uuidv4 } from 'uuid';

export default [
    {
        id: 'text-collection',
        title: 'Text Data Collection',
        description: 'Multilingual text data is critical to developing your natural language processing. (Menu Dataset, Ticket Dataset, Business Card Dataset, Document Dataset, Receipt Dataset, Text Messages) to extract vital information hidden deep within unstructured data and address a range of application cases. Wow AI provides a variety of Data Collection services. For example:',
        img1: '/images/collection/DocumentDatasetCollection1.png',
        img2: '/images/collection/AcousticDataCollection1.png',
        img3: '/images/collection/FacialDatasetCollection1.png',
        boxst: [
            {
                color: 'var(--secondary-text)',
                bgcolor: 'var(--primary-text)',
                title: 'Receipt Dataset Collection',
                description: 'We assist you in collecting various forms of invoices such as online invoices, shopping invoices, cab receipts, hotel bills, and other.',
            },
            {
                color: 'var(--primary-text)',
                bgcolor: 'var(--secondary-text)',
                title: 'Document Dataset Collection',
                description: "We can assist you with gathering all forms of crucial documents, such as a driver's license or a credit card, from various locations.",
            }
        ],
    },
    {
        id: 'speech-collection',
        title: 'Speech Data Collection',
        description: 'We can assist you in gathering data from over 120 languages and dialects, accents, regions, and voice varieties, as well as transcribe (including utterances), timestamp, and classify it. We provide a variety of speech data collection services, including:',
        img1: '/images/collection/FacialDatasetCollection1.png',
        img2: '/images/collection/DocumentDatasetCollection1.png',
        img3: '/images/collection/AcousticDataCollection1.png',
        boxst: [
            {
                title: 'Monologue Speech Collection',
                description: 'Collect data from individual speakers in the form of prepared, directed, or spontaneous speech. The speaker is chosen based on your.',
            },
            {
                title: 'Dialogue Speech Collection',
                description: "Collect guided or spontaneous speech datasets/interactions between a Call Center Agent and a Caller or a Caller and a Bot depending.",
            }
        ]
    },
    {
        id: 'image-collection',
        title: 'Image Data Collection',
        description: 'Collect large volumes of image datasets (medical image datasets, invoice image datasets, facial dataset, or any custom data set) for a variety of use cases, such as image classification, image segmentation, facial recognition, and so on, to add computer vision to your machine learning capabilities.',
        img1: '/images/collection/AcousticDataCollection1.png',
        img2: '/images/collection/FacialDatasetCollection1.png',
        img3: '/images/collection/DocumentDatasetCollection1.png',
        boxst: [
            {
                title: 'Document Dataset Collection',
                description: 'We offer image datasets of a variety of papers, such as an invoice, a receipt, a menu, and so on.',
            },
            {
                title: 'Medical Imaging Data Collection',
                description: 'We offer access to medical image datasets across many medical specialties such as Radiology, Oncology, Pathology, and others.',
            },
            {
                title: 'Facial Dataset Collection',
                description: 'We provide a collection of facial picture datasets that include facial characteristics, perspectives, and emotions from people.',
            },
        ]
    },
    {
        id: 'video-collection',
        title: 'Video Data Collection',
        description: 'When it comes to video data collection services, Wow AI can provide you with the necessary skills, knowledge, resources, and scalability. Our videos are of the greatest quality and are specially designed to fit your needs. Each dataset is created specifically for you.',
        img1: '/images/collection/image35.png',
        img2: '/images/collection/AcousticDataCollection1.png',
        img3: '/images/collection/DocumentDatasetCollection1.png',
        boxst: [
            {
                title: 'Human Posture Video Dataset Collection',
                description: 'We provide video datasets of diverse human postures like walking, sitting, sleeping, etc. in various lighting circumstances ranging.',
            },
            {
                title: 'CCTV/Surveillance Video Dataset',
                description: 'We can gather surveillance footage from security cameras to help investigators train and detect people with criminal histories.',
            },
            {
                title: 'Traffic Video Dataset Collection',
                description: 'To train your machine learning models, we may collect traffic data from many locations under various lighting conditions and intensities.',
            },
        ]
    }
]