import React from 'react'
import { Route, Routes } from 'react-router';
import RootLayOut from './pages/RootLayOut';
import HomePage from './pages/HomePage';
import About from './pages/About';
import NotFound from './pages/NotFound';
import DetailPage from './pages/DetailPage';
// import Sample from './pages/Sample';
import InfoForm from './components/InfoForm';
import Update from './components/Update';

// import Store from './components/Store';
// import InfoSlice from './components/InfoSlice';
// import Slice from './components/Slice';

const App = () => {


  return (
    <>

      <Routes>

        <Route path='/' element={<RootLayOut />}>
          <Route index element={<HomePage />} />
          <Route path='about' element={<About />} />
          <Route path='detail_page/:category' element={<DetailPage />} />
          <Route path='infoForm' element={<InfoForm />} />
          {/* <Route path='Store' element={<Store />} />
          <Route path='InfoSlice' element={<InfoSlice />} />
          <Route path='Slice' element={<Slice />} /> */}

          <Route path='update/:id' element={<Update />} />







          <Route path='*' element={<NotFound />} />

        </Route>



      </Routes>

    </>
  )
}

export default App