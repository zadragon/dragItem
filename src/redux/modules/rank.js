import {firestore} from '../../firebase';

const rank_db = firestore.collection("rank");

// Actions

// 유저 이름을 바꾼다
const ADD_USER_NAME = "rank/ADD_USER_NAME";
// 유저 메시지를 바꾼다
const ADD_USER_MESSAGE = "rank/ADD_USER_MESSAGE";
// 랭킹정보를 추가한다
const ADD_RANK = "rank/ADD_RANK";
// 랭킹정보를 가져온다
const GET_RANK = "rank/GET_RANK";

const IS_LOADED = "rank/IS_LOADED";

const initialState = {
    user_name: "",
    user_message: "",
    user_score: "",
    score_texts: {
        60: "우린 친구! 앞으로도 더 친하게 지내요! :)",
        80: "우와! 우리는 엄청 가까운 사이!",
        100: "둘도 없는 단짝이에요! :)",
    },
    ranking: [
        { score: 40, name: "임민영", message: "안녕 르탄아!" },
        { score: 40, name: "임민영", message: "안녕 르탄아!" },
        { score: 40, name: "임민영", message: "안녕 르탄아!" },
        { score: 40, name: "임민영", message: "안녕 르탄아!" },
        { score: 40, name: "임민영", message: "안녕 르탄아!" },
        { score: 40, name: "임민영", message: "안녕 르탄아!" },
        { score: 40, name: "임민영", message: "안녕 르탄아!" },
        { score: 40, name: "임민영", message: "안녕 르탄아!" },
        { score: 40, name: "임민영", message: "안녕 르탄아!" },
        { score: 40, name: "임민영", message: "안녕 르탄아!" },
        { score: 40, name: "임민영", message: "안녕 르탄아!" },
        { score: 40, name: "임민영", message: "안녕 르탄아!" },
    ],
    is_loaded:false,
};

// Action Creators
export const addUserName = (user_name) => {
    return { type: ADD_USER_NAME, user_name };
};

export const addUserMessage = (user_message) => {
    return { type: ADD_USER_MESSAGE, user_message };
};

export const addRank = (rank_info) => {
    return { type: ADD_RANK, rank_info };
};

export const getRank = (rank_list) => {
    return { type: GET_RANK, rank_list };
};

export const isLoaded = (loaded) =>{
    return {type:IS_LOADED, loaded}
}

export const getRankFB = () => {
    return function (dispatch){

        dispatch(isLoaded(false));

        rank_db.get().then((docs) => {
            let rank_data = [];

            docs.forEach((doc) => {
                // console.log(doc.data());
                rank_data = [...rank_data, {id: doc.id, ...doc.data()}];
            });

            dispatch(getRank(rank_data));
            dispatch(isLoaded(true));

        })
    }
}

// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        // do reducer stuff
        case "rank/ADD_USER_NAME": {
            return { ...state, user_name: action.user_name };
        }

        case "rank/ADD_USER_MESSAGE": {
            return { ...state, user_message: action.user_message };
        }

        case "rank/ADD_RANK": {
            return { ...state, ranking: [...state.ranking, action.rank_info] };
        }

        case "rank/GET_RANK": {
            return { ...state, ranking: action.rank_list };
        }

        case "rank/IS_LOADED":{
            return {...state, is_loaded: action.loaded};
        }

        default:
            return state;
    }
}