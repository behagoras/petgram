import React from 'react';
import Context from '../Context';
import UserForm from '../components/UserForm';

import RegisterMutation from '../apollo/RegisterMutation';
import LoginMutation from '../apollo/LoginMutation';

const NotRegisteredUser = () => {
  return (
    <Context.Consumer>
      {
        ({ activateAuth }) => {
          return (
            <>
              <RegisterMutation>
                {
                  (register, { loading, data, error }) => {
                    const onSubmit = ({ email, password }) => {
                      const input = { email, password };
                      const variables = { input };
                      register({ variables })
                        .then(activateAuth)
                        .catch((error) => { console.log(error.graphQLErrors[0].message) ; });
                    };

                    const errorMsg = error && error.graphQLErrors[0].message;
                    console.log(errorMsg);
                    return <UserForm disabled={loading} error={errorMsg} onSubmit={onSubmit} title="Registrarse" />;
                  }
                }
              </RegisterMutation>
              <LoginMutation>
                {
                  (login, { loading, data, error }) => {
                    const onSubmit = ({ email, password }) => {
                      const input = { email, password };
                      const variables = { input };
                      login({ variables })
                        .then(activateAuth)
                        .catch((error) => { console.log(error.graphQLErrors[0].message) ; });
                    };

                    const errorMsg = error && error.graphQLErrors[0].message;
                    console.log(errorMsg);
                    return <UserForm disabled={loading} error={errorMsg} onSubmit={onSubmit} title="Ingresar" />;
                  }
                }
              </LoginMutation>
            </>
          );
        }
      }
    </Context.Consumer>
  );
};

export default NotRegisteredUser;
