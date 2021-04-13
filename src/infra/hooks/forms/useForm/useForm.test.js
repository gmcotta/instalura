import { act, renderHook } from '@testing-library/react-hooks';
import useForm from '.';

describe('useForm()', () => {
  describe('when user types', () => {
    it('should change the value', () => {
      const initialValues = { nome: 'Test' };
      const { result } = renderHook(() => useForm({
        initialValues: {
          nome: 'Test',
        },
      }));
      expect(result.current.values).toEqual(initialValues);

      const event = {
        target: {
          getAttribute: () => 'nome',
          value: 'Other Test',
        },
      };

      const newValues = { nome: 'Other Test' };
      act(() => {
        result.current.handleChange(event);
      });
      expect(result.current.values).toEqual(newValues);
    });
  });
});
