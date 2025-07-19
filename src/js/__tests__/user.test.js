import { loadUser, saveUser } from '../user';
import { httpGet } from '../http';

jest.mock('../http', () => ({
  httpGet: jest.fn(),
}));

describe('user.js functions', () => {
  it('should load user data correctly', () => {
    const mockResponse = '{"id": 1, "name": "Alex"}';
    httpGet.mockReturnValue(mockResponse);

    const user = loadUser(1);

    expect(user).toEqual({ id: 1, name: 'Alex' });
    expect(httpGet).toHaveBeenCalledWith('http://server:8080/users/1');
  });

  it('should throw an error when saving a user', () => {
    expect(() => saveUser({})).toThrow('Unimplemented');
  });
});
