import React from "react";
import clsx from "clsx";
import { ThemeContext } from "./ThemeContext";

const CommentForm = () => {

    const { theme, toggleTheme } = React.useContext(ThemeContext);
    
  return (
    <form className="flex border-b items-center gap-4">
        <textarea 
            className={clsx({
                'w-full bg-inherit text-[14px] outline-none py-7' : true,
                'text-dark-primary-text placeholder:text-dark-primary-text ' : theme === 'light',
                'text-light-primary-text placeholder:text-light-primary-text' : theme === 'dark',
            })}
            cols="30" 
            rows="1" 
            placeholder="Add a comment" 
        />
        <button className="bg-primary-blue text-light-primary-text text-14px px-6 py-2 rounded-lg">post</button>
    </form>
  )
}

export default CommentForm