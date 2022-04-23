import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from 'react';

type ColorsContextProps = {
  children: ReactNode;
};

type ColorsContextData = {
  primary: string;
  secondary: string;
  background: string;
};

const ColorsContext = createContext({} as ColorsContextData);

export const ColorsContextProvider = ({ children }: ColorsContextProps) => {
  const [colors, setColors] = useState<ColorsContextData>(
    {} as ColorsContextData
  );

  useEffect(() => {
    setColors({
      primary: '#214265',
      secondary: '#EB00B7',
      background: '#1B1D3D',
    });
  }, []);

  return (
    <ColorsContext.Provider
      value={{
        primary: colors.primary,
        secondary: colors.secondary,
        background: colors.background,
      }}
    >
      {children}
    </ColorsContext.Provider>
  );
};

export const useColors = () => {
  const colors = useContext(ColorsContext);
  return colors;
};
