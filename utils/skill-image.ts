import python from '@public/svg/skills/python.svg';
import javascript from '@public/svg/skills/javascript.svg';
import postgresql from '@public/svg/skills/postgresql.svg';
import photoshop from '@public/svg/skills/photoshop.svg';
import mongoDB from '@public/svg/skills/mongoDB.svg';
import mysql from '@public/svg/skills/mysql.svg';
import nextJS from '@public/svg/skills/nextJS.svg';
import microsoftoffice from '@public/svg/skills/microsoftoffice.svg';
import materialui from '@public/svg/skills/materialui.svg';
import java from '@public/svg/skills/java.svg';
import html from '@public/svg/skills/html.svg';
import git from '@public/svg/skills/git.svg';
import bootstrap from '@public/svg/skills/bootstrap.svg';
import css from '@public/svg/skills/css.svg';
import docker from '@public/svg/skills/docker.svg';
import figma from '@public/svg/skills/figma.svg';
import firebase from '@public/svg/skills/firebase.svg';
import react from '@public/svg/skills/react.svg';
import tailwind from '@public/svg/skills/tailwind.svg';
import typescript from '@public/svg/skills/typescript.svg';
import sanity from '@public/svg/skills/sanity.svg'
import microsoftffice from '@public/svg/skills/microsoft-office.svg'
import express from '@public/svg/skills/express.svg'
import nodejs from '@public/svg/skills/nodejs.svg'



export const skillsImage = (skill : string) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'html':
      return html;
    case 'css':
      return css;
    case 'javascript':
      return javascript;
    case 'typescript':
      return typescript;
    case 'react':
      return react;
    case 'next js':
      return nextJS;
    case 'tailwind':
      return tailwind;
    case 'mongodb':
      return mongoDB;
    case 'mysql':
      return mysql;
    case 'postgresql':
      return postgresql;
    case 'git':
      return git;
    case 'nodejs':
      return nodejs;
    case 'figma':
      return figma;
    case 'firebase':
      return firebase;
    case 'materialui':
      return materialui;
    case 'microsoft office':
      return microsoftoffice;
    case 'sanity':
      return sanity;
    case 'express':
      return express;
    default:
      break;
  }
}