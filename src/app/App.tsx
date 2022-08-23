import React from 'react';
import { AuthProvider } from './context/authProvider';
import { GlobalStyles } from './GlobalStyled';
import { Rotas } from './routes/rotas';

function App() {
  return (
    <AuthProvider>
      <Rotas>
        <GlobalStyles />
      </Rotas>
    </AuthProvider>
  );
}

export default App;
