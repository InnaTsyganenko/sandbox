import React from 'react';

function AboutRedux() {

  return (
    <section className="conspect">
      <h1>Typescript</h1>
      <h2>Dafault props</h2>
      <h3>Для TypeScript 3.0 и выше</h3>
      <p>В TypeScript специально добавлена поддержка defaultProps чтобы проверка работала так, как вы ожидаете. Пример:</p>
      <pre>{`interface PageProps {
  foo: string;
  bar: string;
}

export class PageComponent extends React.Component<PageProps, {}> {
    public static defaultProps = {
        foo: "default"
    };

    public render(): JSX.Element {
        return (
            <span>Hello, { this.props.foo.toUpperCase() }</span>
        );
    }
}

// output
<PageComponent bar={ "hello" } />`}
      </pre>

      <h3>Для TypeScript 2.1 до 3.0</h3>
      <p>До того, как в TypeScript 3.0 была реализована поддержка компилятора для defaultProps вы все еще могли использовать ее, и она работала на 100% с React во время выполнения, но, поскольку TypeScript рассматривал только реквизиты при проверке атрибутов JSX, вы должны пометить реквизиты, которые имеют значения по умолчанию, как необязательные с ? , Пример:</p>
      <pre>{`interface PageProps {
    foo?: string;
    bar: number;
}

export class PageComponent extends React.Component<PageProps, {}> {
    public static defaultProps: Partial<PageProps> = {
        foo: "default"
    };

    public render(): JSX.Element {
        return (
            <span>Hello, world</span>
        );
    }
}`}
      </pre>

      <h3>До TypeScript 2.1</h3>
      <p>Вы также можете использовать defaultProps для компонентов функций, но вам нужно ввести свою функцию в интерфейс StatelessComponent (FunctionComponent в @types/react версию 16.7.2 +), чтобы TypeScript знал о defaultProps для функции:</p>
      <pre>{`interface PageProps {
  foo?: string;
  bar: number;
}

const PageComponent: StatelessComponent<PageProps> = (props) => {
  return (
    <span>Hello, {props.foo}, {props.bar}</span>
  );
};

PageComponent.defaultProps = {
  foo: "default"
};`}
      </pre>
    </section>
  );
}

export default AboutRedux;
