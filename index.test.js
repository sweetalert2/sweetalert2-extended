import { test, mock, expect } from "bun:test";
import { showSwal } from "./index";
import Swal from "sweetalert2";

const events = [];
mock.module("sweetalert2", () => {
  return {
    default: class extends Swal {
      _main(params) {
        return super._main({
          ...params,
          willOpen: () => {
            params.willOpen && params.willOpen()
            events.push('show')
          },
        })
      }
    },
  };
});

test('should show a sweet alert', () => {
  showSwal();

  expect(events).toEqual(['show'])
});
