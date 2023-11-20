import App from '../App';
import NotFound from '../pages/NotFound';
import Main from '../pages/Main';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import InfoBoard from '../pages/InfoBoard';
import InfoBoardDetail from '../pages/InfoBoardDetail';
import QuestionBoard from '../pages/QuestionBoard';
import QuestionBoardDetail from '../pages/QuestionBoardDetail';
import FreeBoard from '../pages/FreeBoard';
import FreeBoardDetail from '../pages/FreeBoardDetail';
import Diary from '../pages/Diary';
import Dictionary from '../pages/Dictionary';
import DictionaryDetail from '../pages/DictionaryDetail';
import Diagnosis from '../pages/Diagnosis';
import Profile from '../pages/Profile';

export const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'signup',
        element: <Signup />,
      },
      {
        path: 'board/info',
        element: <InfoBoard />,
      },
      {
        path: 'board/info/:id',
        element: <InfoBoardDetail />,
      },
      {
        path: 'board/question',
        element: <QuestionBoard />,
      },
      {
        path: 'board/question/:id',
        element: <QuestionBoardDetail />,
      },
      {
        path: 'board/free',
        element: <FreeBoard />,
      },
      {
        path: 'board/free/:id',
        element: <FreeBoardDetail />,
      },
      {
        path: 'diary',
        element: <Diary />,
      },
      {
        path: 'dictionary',
        element: <Dictionary />,
      },
      {
        path: 'dictionary/:id',
        element: <DictionaryDetail />,
      },
      {
        path: 'diagnosis',
        element: <Diagnosis />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
    ],
  },
];
