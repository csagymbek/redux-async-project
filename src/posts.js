const initialState = {
  posts: [],
  loading: false,
  error: "",
};

export default function postsReducer(
  state = initialState,
  { type, error, posts }
) {
  switch (type) {
    case "FETCH_POSTS_REQUEST":
      return { ...state, loading: true, error: "" };
    case "FETCH_POSTS_SUCCESS":
      return { ...state, loading: false, error: "", posts };
    case "FETCH_POSTS_FAIL":
      return { ...state, loading: false, posts: [], error };
    default:
      return state;
  }
}

export const fetchPosts = () => async (dispatch, getState) => {
  dispatch({ type: "FETCH_POSTS_REQUEST" });
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const posts = await response.json();
    dispatch({ type: "FETCH_POSTS_SUCCESS", posts });
  } catch (error) {
    dispatch({ type: "FETCH_POSTS_FAIL", error });
  }
};
