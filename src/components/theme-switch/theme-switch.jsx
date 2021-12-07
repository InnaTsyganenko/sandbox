import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getCurrentTheme} from '../../store/user/selectors';
import {changeCurrentTheme} from '../../store/action';

function ThemeSwitch() {

  const dispatch = useDispatch();
  const currentTheme = useSelector(getCurrentTheme);

  const toggle = () => {
    if (currentTheme === 'day') {
      dispatch(changeCurrentTheme('night'));
    } else {
      dispatch(changeCurrentTheme('day'));
    }
  };

  const css = `html { filter: invert(100%); background: #fefefe; }
* { background-color: inherit }
svg, img[src*=".svg"], video { filter: invert(100%) }`;

  return (
    <div>
      <button className="theme-switch__button" aria-pressed={(currentTheme === 'day') ? 'true' : 'false'}
        onClick={toggle}
      >
        <span aria-hidden="true">{(currentTheme === 'day')
          ? <svg className="theme-switch__img" role="img" width="60" height="60" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#a)"><path d="M29.565 0a1.035 1.035 0 0 0-1.034 1.034v3a1.034 1.034 0 1 0 2.068 0v-3A1.034 1.034 0 0 0 29.565 0ZM20.63 2.428a1.032 1.032 0 0 0-1.779-.331 1.035 1.035 0 0 0-.165 1.037l1.025 2.817a1.034 1.034 0 1 0 1.944-.707L20.63 2.428Zm-8.891 4.718a1.034 1.034 0 1 0-1.585 1.33l1.928 2.296a1.035 1.035 0 0 0 1.584-1.331L11.74 7.146ZM7.593 16.12l-2.597-1.498a1.035 1.035 0 0 0-1.033 1.792l2.595 1.498a1.036 1.036 0 1 0 1.034-1.792ZM.86 25.99l2.95.517a1.035 1.035 0 1 0 .36-2.037l-2.95-.516a1.035 1.035 0 0 0-.36 2.038v-.001Zm4.15 8.342a1.035 1.035 0 0 0-1.204-.84l-2.95.518a1.033 1.033 0 0 0 .179 2.053c.06 0 .121-.005.18-.016l2.951-.517a1.034 1.034 0 0 0 .843-1.198Zm1.547 7.758-2.594 1.498a1.035 1.035 0 1 0 1.034 1.792l2.595-1.498a1.036 1.036 0 1 0-1.034-1.792Zm5.525 7.14-1.927 2.294a1.035 1.035 0 0 0 1.585 1.33l1.926-2.294a1.035 1.035 0 0 0-1.584-1.33Zm8.954 4.201a1.031 1.031 0 0 0-1.324.621l-1.026 2.816a1.035 1.035 0 0 0 1.944.706l1.025-2.816a1.033 1.033 0 0 0-.619-1.327Zm8.529 1.501a1.034 1.034 0 0 0-1.034 1.035v3a1.034 1.034 0 1 0 2.068 0v-3a1.034 1.034 0 0 0-1.034-1.035Zm9.853-.882a1.033 1.033 0 1 0-1.943.707l1.025 2.816a1.035 1.035 0 0 0 1.943-.706l-1.025-2.817Zm7.63-4.82a1.034 1.034 0 0 0-1.584 1.33l1.926 2.295a1.034 1.034 0 1 0 1.585-1.33l-1.927-2.296Zm8.12-5.642-2.596-1.498a1.034 1.034 0 1 0-1.035 1.792l2.596 1.498a1.034 1.034 0 0 0 1.034-1.792Zm3.101-9.577-2.95-.516a1.032 1.032 0 0 0-1.172 1.374 1.034 1.034 0 0 0 .812.662l2.951.517a1.036 1.036 0 1 0 .36-2.038v.001Zm-4.149-8.34a1.034 1.034 0 0 0 1.2.838l2.95-.517a1.037 1.037 0 0 0 .839-1.198 1.035 1.035 0 0 0-1.199-.84l-2.95.517a1.035 1.035 0 0 0-.84 1.2Zm-2.064-7.62c.181 0 .36-.048.517-.139l2.595-1.498a1.034 1.034 0 0 0-1.034-1.792l-2.597 1.498a1.035 1.035 0 0 0 .517 1.93h.002ZM47.39 7.145l-1.926 2.295a1.034 1.034 0 1 0 1.582 1.33l1.928-2.295a1.034 1.034 0 1 0-1.585-1.33h.001ZM39.825 1.81a1.035 1.035 0 0 0-1.325.62l-1.025 2.817a1.034 1.034 0 1 0 1.943.706l1.025-2.816a1.035 1.035 0 0 0-.618-1.327ZM51.289 30c0 11.998-9.726 21.724-21.724 21.724S7.841 41.998 7.841 30 17.567 8.276 29.565 8.276 51.289 18.002 51.289 30Z" fill="#FFDC64"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>
          : <svg className="theme-switch__img" role="img" width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#a)"><path d="M18.927 39.998A19.472 19.472 0 0 1 1.06 28.728 15.27 15.27 0 0 0 7.499 30c8.674-.01 15.703-7.04 15.713-15.713A16.283 16.283 0 0 0 14.739.24a29.861 29.861 0 0 1 4.188-.237C29.97.002 38.925 8.956 38.925 20c0 11.045-8.953 19.998-19.998 19.998Z" fill="#FFDC64"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z"/></clipPath></defs></svg>}
        </span>
      </button>
      <style media={(currentTheme === 'day') ? 'none' : 'screen'}>
        {(currentTheme === 'day') ? css.trim() : css}
      </style>
    </div>
  );
}

export default ThemeSwitch;
