import { ConfigProvider } from 'antd';
import React from 'react';
import themConfig from './themeConfig.json'
import AppRoutes from './routes/AppRoutes.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/global.scss"
const App: React.FC = () => (
  <ConfigProvider
    theme={themConfig}
  >
    <AppRoutes/>

  </ConfigProvider>
);

export default App;