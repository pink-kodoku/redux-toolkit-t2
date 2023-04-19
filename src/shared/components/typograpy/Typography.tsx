import { createElement } from 'react';
import styles from './styles.module.scss'
import cn from 'classnames'

const elementsMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  text: 'div',
  paragraph: 'p'
}

type ElementType = keyof typeof elementsMapping

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  element?: ElementType;
}

const ElementComponent: React.FC<IProps> = ({ element = 'text', children, ...props }) =>
  createElement(elementsMapping[element], props, children);

const Typography: React.FC<IProps> = ({ element, children, ...props }) => {

  return (
    <ElementComponent element={element} className={cn(styles[`typography-element-${element}`])} {...props}>
      {children}
    </ElementComponent >
  )
}

export default Typography;