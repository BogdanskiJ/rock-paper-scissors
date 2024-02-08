import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    };
    *,::after, ::before {
        box-sizing: inherit;
    };

    body {
        margin: 0 auto;
        height: 100vh; 
	    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
		"Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
		sans-serif;
	    -webkit-font-smoothing: antialiased;
	    -moz-osx-font-smoothing: grayscale;  
    };
    
    body::-webkit-scrollbar {
        width: 6px;
        height: 6px;
    }
    body::-webkit-scrollbar-track {
        border-radius: 10px;
        background: ${({ theme }) => theme.color.blackOpacity01};
    }
    body::-webkit-scrollbar-thumb{
        border-radius: 10px;
        background: ${({ theme }) => theme.color.blackOpacity02};
    }
    body::-webkit-scrollbar-thumb:hover{
  	    background: ${({ theme }) => theme.color.blackOpacity04};
    }
    body::-webkit-scrollbar-thumb:active{
  	    background: ${({ theme }) => theme.color.blackOpacity05};
    }
`;
