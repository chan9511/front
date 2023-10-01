import React from "react";

const SignUp = () => {
  return (
    <div>
      <form class="form-control px-4 py-3">
        <div class="mb-3">
          <label for="exampleDropdownFormEmail1" class="form-label">
            이메일
          </label>
          <input
          
            type="email"
            class="form-control"
            id="exampleDropdownFormEmail1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleDropdownFormPassword1" class="form-label">
            비밀번호
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleDropdownFormPassword1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleDropdownFormPassword2" class="form-label">
            비밀번호 확인
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleDropdownFormPassword2"
          />
        </div>
        <div class="mb-3">
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="dropdownCheck"
            />
            <label class="form-check-label" for="dropdownCheck">
              이용약관 및 개인정보 수집 및 이용 에 동의합니다.
            </label>
          </div>
        </div>
        <div>
        <button type="submit" class="btn btn-primary" style={{ backgroundColor: '#6699ff', color: 'white', border:0}}>
            회원가입
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
