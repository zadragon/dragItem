// Actions

// 퀴즈 데이터 가져온다
const GET_QUIZ = "quiz/GET_QUIZ";
// 유저의 응답(퀴즈 답)을 추가한다
const ADD_ANSWER = "quiz/ADD_ANSWER";
// 응답을 초기화 해준다
const RESET_ANSWER = "quiz/RESET_ANSWER";

const initialState = {
    name: "메시",
    score_texts: {
        60: "우린 친구! 앞으로도 더 친하게 지내요! :)",
        80: "우와! 우리는 엄청 가까운 사이!",
        100: "둘도 없는 단짝이에요! :)",
    },
    answers: [],
    quiz: [
        { question: "메시의 소속팀은 레알마드리드다.", answer: "X" },
        { question: "메시는 바르셀로나 유스출신이다.", answer: "O" },
        { question: "메시의 국적은 한국이다.", answer: "X" },
        { question: "메시의 키는 170cm 이상이다.", answer: "X" },
        { question: "메시의 바르셀로나 등번호는 10번이다", answer: "O" },
    ],
};

// Action Creators
export const getQuiz = (quiz_list) => {
    return { type: GET_QUIZ, quiz_list };
};

export const addAnswer = (answer) => {
    return { type: ADD_ANSWER, answer };
};

export const resetAnswer = () => {
    return { type: RESET_ANSWER };
}

// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        // do reducer stuff
        case "quiz/GET_QUIZ": {
            return { ...state, quiz: action.quiz_list };
        }

        case "quiz/ADD_ANSWER": {
            return { ...state, answers: [...state.answers, action.answer] };
        }

        case "quiz/RESET_ANSWER": {
            return {...state, answers: []};
        }

        default:
            return state;
    }
}