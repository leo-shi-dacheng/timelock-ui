import {ReactNode} from 'react';
import LocaleSwitcher from './LocaleSwitcher';
type Props = {
  children?: ReactNode;
  title: string;
};

export default function LoginLayout({children, title}: Props) {
  console.log('children, title',children, title)
  return (
    <>
  <div
        style={{
          padding: 24,
          fontFamily: 'system-ui, sans-serif',
          lineHeight: 1.5,
          boxSizing: 'border-box'
        }}
      >
        <div style={{maxWidth: 510}}>
          <h1>{title}</h1>
          {children}
          <div style={{marginTop: 24}}>
            <LocaleSwitcher />
          </div>
        </div>
      </div>
    </>
  );
}