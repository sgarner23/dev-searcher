import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    
    
    
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }

  p {
    color: ${({ theme }) => theme.color}
  }

  .dark-text {
    color: ${({ theme }) => theme.color}
  }


 .search-bar-container {
   background-color: ${({ theme }) => theme.background};
   box-shadow: ${({ theme }) => theme.boxShadow};
 }
 

 .profile-card{
  background-color: ${({ theme }) => theme.background}
 }

 .user-input {
   background-color: ${({ theme }) => theme.background};
   color: ${({ theme }) => theme.userInputColor};
 }
 
 .user-input::placeholder {
   color: ${({ theme }) => theme.color}
 }

 .git-title {
  color: ${({ theme }) => theme.gitTitle}
 }
 .date {
  color: ${({ theme }) => theme.date}
 }

 .profile-text {
   color: ${({ theme }) => theme.profileText}
 }

 .stats {
   background-color: ${({ theme }) => theme.statsBackground}
 }

 .filter {
   filter: ${({ theme }) => theme.filterIcon}
 }

 .profile-card {
   box-shadow: ${({ theme }) => theme.boxShadow}
 }

  
  `;
