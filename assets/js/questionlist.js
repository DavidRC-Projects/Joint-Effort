// List of quiz questions in an array with nested objects. Edited from https://www.youtube.com/watch?v=PBcqGxrr9g8.
const questions = [
    {
        question: "How many bones are there in the spine?",
        answers: [
            { text: "40", correct: false },
            { text: "41", correct: false },
            { text: "34", correct: false },
            { text: "33", correct: true }
        ]
    },
    {
        question: "What is the largest bone in the human body?",
        answers: [
            { text: "Tibia", correct: false },
            { text: "Femur", correct: true },
            { text: "Fibula", correct: false },
            { text: "Humerus", correct: false }
        ]
    },
    {
        question: "How many bones are in the adult human body?",
        answers: [
            { text: "200", correct: false },
            { text: "210", correct: false },
            { text: "216", correct: false },
            { text: "206", correct: true }
        ]
    },
    {
        question: "Which of these is not a part of the axial skeleton?",
        answers: [
            { text: "Skull", correct: false },
            { text: "Ribs", correct: false },
            { text: "Spine", correct: false },
            { text: "Femur", correct: true }
        ]
    },
    {
        question: "Which bone is located in the upper arm?",
        answers: [
            { text: "Humerus", correct: true },
            { text: "Radius", correct: false },
            { text: "Ulna", correct: false },
            { text: "Clavicle", correct: false }
        ]
    },
    {
        question: "What is the name of the bone that forms the base of the skull?",
        answers: [
            { text: "Occipital bone", correct: true },
            { text: "Temporal bone", correct: false },
            { text: "Frontal bone", correct: false },
            { text: "Parietal bone", correct: false }
        ]
    },
    {
        question: "Which bone is commonly known as the collarbone?",
        answers: [
            { text: "Clavicle", correct: true },
            { text: "Scapula", correct: false },
            { text: "Sternum", correct: false },
            { text: "Rib", correct: false }
        ]
    },
    {
        question: "The patella is commonly known as the:",
        answers: [
            { text: "Wrist bone", correct: false },
            { text: "Elbow joint", correct: false },
            { text: "Ankle bone", correct: false },
            { text: "Knee Cap", correct: true }
        ]
    },
    {
        question: "Which part of the body contains the most bones?",
        answers: [
            { text: "Arms", correct: false },
            { text: "Feet", correct: false },
            { text: "Hands", correct: true },
            { text: "Legs", correct: false }
        ]
    },
    {
        question: "Which bone is the most proximal in the arm?",
        answers: [
            { text: "Humerus", correct: true },
            { text: "Radius", correct: false },
            { text: "Ulna", correct: false },
            { text: "Scapula", correct: false }
        ]
    },
    {
        question: "What is the name of the bony structure that protects the brain?",
        answers: [
            { text: "Skull", correct: true },
            { text: "Ribs", correct: false },
            { text: "Pelvis", correct: false },
            { text: "Vertebrae", correct: false }
        ]
    },
    {
        question: "Which bone forms the lower part of the spine?",
        answers: [
            { text: "Sacrum", correct: true },
            { text: "Coccyx", correct: false },
            { text: "Lumbar", correct: false },
            { text: "Thoracic", correct: false }
        ]
    },
    {
        question: "Which bone forms the back portion of the pelvis?",
        answers: [
            { text: "Ilium", correct: false },
            { text: "Ischium", correct: true },
            { text: "Pubis", correct: false },
            { text: "Sacrum", correct: false }
        ]
    },
    {
        question: "Which bone is primarily responsible for bearing weight in the lower leg?",
        answers: [
            { text: "Fibula", correct: false },
            { text: "Femur", correct: false },
            { text: "Tibia", correct: true },
            { text: "Patella", correct: false }
        ]
    },
    {
        question: "What is the name of the first cervical vertebra that supports the skull?",
        answers: [
            { text: "Axis", correct: false },
            { text: "Cervical 3", correct: false },
            { text: "Odontoid", correct: false },
            { text: "Atlas", correct: true }
        ]
    },{
        question: "Which bone forms the base of the palm in the human hand?",
        answers: [
            { text: "Scaphoid", correct: false },
            { text: "Carpals", correct: false },
            { text: "Metacarpals", correct: true },
            { text: "Phalanges", correct: false }
        ]
    },
    {
        question: "What is the name of the bone located in the elbow joint that connects the upper arm to the forearm?",
        answers: [
            { text: "Humerus", correct: true },
            { text: "Ulna", correct: false },
            { text: "Radius", correct: false },
            { text: "Scapula", correct: false }
        ]
    },
    {
        question: "Which bone is commonly known as the shoulder blade?",
        answers: [
            { text: "Clavicle", correct: false },
            { text: "Scapula", correct: true },
            { text: "Humerus", correct: false },
            { text: "Sternum", correct: false }
        ]
    },
    {
        question: "Which part of the hand is composed of 14 bones?",
        answers: [
            { text: "Metacarpals", correct: false },
            { text: "Phalanges", correct: true },
            { text: "Carpals", correct: false },
            { text: "Radius", correct: false }
        ]
    },
    {
        question: "Which bone in the elbow acts as a hinge, allowing the arm to bend and straighten?",
        answers: [
            { text: "Ulna", correct: true },
            { text: "Radius", correct: false },
            { text: "Humerus", correct: false },
            { text: "Scapula", correct: false }
        ]
    }
];