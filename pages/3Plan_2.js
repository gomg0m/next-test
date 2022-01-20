import React from 'react';
import './3Plan_2.css';

function App() {
  return (
    <div className="frame-307 border-1px-link-water">
      <div className="flex-row-2">
        <div className="text-4 notosanskr-normal-black-16px">
          장르
        </div>
        <div className="group-1313">
          <div className="overlap-group1 border-1px-bon-jour">
            <div className="text-4 notosanskr-normal-black-16px">
              음악
            </div>
            <img
              className="arrow_drop_down"
             
              src="https://anima-uploads.s3.amazonaws.com/projects/61763ed8f006ecfc280e3680/releases/61763f472fbc493022ab4a33/img/arrow-drop-down-3@2x.svg"
            />
          </div>
        </div>
      </div>
      <Group1316 />
      <div className="on1">
        <div className="overlap-group8">
          <Group1872 />
          <img
            className="check"
           
            src="https://anima-uploads.s3.amazonaws.com/projects/61763ed8f006ecfc280e3680/releases/61a449096bf1f9a3920f34de/img/check-2@2x.svg"
          />
        </div>
      </div>
      <div className="group-1317">
        <div className="text-4-1 notosanskr-normal-black-16px">
          공연예상일자
        </div>
        <div className="group-1874">
          <div className="overlap-group-2 border-1px-bon-jour">
            <div className="date notosanskr-normal-black-16px">
              2021.10.15
            </div>
            <img
              className="insert_invitation_24px"
             
              src="https://anima-uploads.s3.amazonaws.com/projects/61763ed8f006ecfc280e3680/releases/61763f472fbc493022ab4a33/img/insert-invitation-24px@2x.svg"
            />
          </div>
        </div>
        <div className="text-5 notosanskr-normal-gray-16px">
          ~
        </div>
        <div className="group-1304">
          <div className="overlap-group-2 border-1px-bon-jour">
            <div className="date notosanskr-normal-black-16px">
              2021.10.20
            </div>
            <img
              className="insert_invitation_24px"
             
              src="https://anima-uploads.s3.amazonaws.com/projects/61763ed8f006ecfc280e3680/releases/61763f472fbc493022ab4a33/img/insert-invitation-24px@2x.svg"
            />
          </div>
        </div>
      </div>
      <Group1318 />
      <div className="group-1434">
        <div className="text-21 notosanskr-normal-black-16px">
          협업팀 초대
        </div>
        <div className="overlap-group-3">
          <div className="rectangle-215 border-1px-bon-jour"></div>
          <input
            className="text_input-1 notosanskr-normal-silver-16px"
           
            name="초대할인원을검색하세요"
            placeholder="초대할 인원을 검색하세요"
            type="text"
          />
          <img
            className="vector"
           
            src="https://anima-uploads.s3.amazonaws.com/projects/61763ed8f006ecfc280e3680/releases/61763f472fbc493022ab4a33/img/vector-4@2x.svg"
          />
        </div>
      </div>
      <div className="frame-container">
        <Frame305 text23="홍길동" />
        <Frame305 text23="김길동" className="frame-306" />
      </div>
      <Group1913
        group1320Props={group1913Data.group1320Props}
        group13202Props={group1913Data.group13202Props}
        group13203Props={group1913Data.group13203Props}
        group1319Props={group1913Data.group1319Props}
       
      />
      <div className="flex-row-3">
        <Property132 />
        <Component87Variant4>저장하기</Component87Variant4>
      </div>
    </div>
  );
}

export default App;

function Group1316() {
  return (
    <div className="group-1316">
      <div className="text-1 notosanskr-normal-black-16px">
        공원명
      </div>
      <div className="overlap-group border-1px-bon-jour">
        <input
          className="text_input notosanskr-normal-black-16px"
         
          name="샤이니"
          placeholder="샤이니 "
          type="text"
        />
      </div>
    </div>
  );
}


function Group1872() {
  return (
    <div className="group-1872">
      <div className="rectangle-216 border-1px-curious-blue"></div>
      <div className="text-22 notosanskr-normal-black-10px">
        가제목입니다.
      </div>
    </div>
  );
}


function Group1318() {
  return (
    <div className="group-1318">
      <div className="text-6 notosanskr-normal-black-16px">
        공연 이미지
      </div>
      <div className="overlap-group2 border-1px-bon-jour">
        <div className="jpeg notosanskr-normal-mine-shaft-16px">
          샤이니.jpeg
        </div>
        <img
          className="close"
         
          src="https://anima-uploads.s3.amazonaws.com/projects/61763ed8f006ecfc280e3680/releases/61b6b0643cbb040b7c8baa09/img/close-6@2x.svg"
        />
      </div>
      <Group1275 />
    </div>
  );
}


function Group1275() {
  return (
    <div className="group-1275 border-1px-bon-jour">
      <img
        className="attach_file"
       
        src="https://anima-uploads.s3.amazonaws.com/projects/61763ed8f006ecfc280e3680/releases/61763f472fbc493022ab4a33/img/attach-file-1@2x.svg"
      />
    </div>
  );
}


function Frame305(props) {
  const { text23, className } = props;

  return (
    <div className={`frame-305 ${className || ""}`}>
      <div className="text-2 notosanskr-normal-black-14px">
        {text23}
      </div>
      <img
        className="clear"
       
        src="https://anima-uploads.s3.amazonaws.com/projects/61763ed8f006ecfc280e3680/releases/61763f472fbc493022ab4a33/img/clear@2x.svg"
      />
    </div>
  );
}


function Group1913(props) {
  const { group1320Props, group13202Props, group13203Props, group1319Props } = props;

  return (
    <div className="group-1913">
      <Group1320
        text2183={group1320Props.text2183}
        inputPlaceholder={group1320Props.inputPlaceholder}
        text2184={group1320Props.text2184}
       
      />
      <Group1320
        text2183={group13202Props.text2183}
        inputPlaceholder={group13202Props.inputPlaceholder}
        text2184={group13202Props.text2184}
        className={group13202Props.className}
       
      />
      <div className="group-132 notosanskr-normal-black-16px">
        <div className="text-11">
          총 예산규모
        </div>
        <div className="overlap-group2-1 border-1px-bon-jour">
          <input
            className="x notosanskr-normal-silver-16px"
           
            name="총예산규모를입력하세요"
            placeholder="총 예산규모를 입력하세요."
            type="text"
          />
        </div>
        <div className="text-1-1">
          만원
        </div>
      </div>
      <Group1320
        text2183={group13203Props.text2183}
        inputPlaceholder={group13203Props.inputPlaceholder}
        text2184={group13203Props.text2184}
        className={group13203Props.className}
       
      />
      <div className="group-132 notosanskr-normal-black-16px">
        <div className="text-15">
          목표티켓가격
        </div>
        <div className="overlap-group4 border-1px-bon-jour">
          <input
            className="x-1 notosanskr-normal-silver-16px"
           
            name="목표티켓가격을입력하세요"
            placeholder="목표티켓가격을 입력하세요."
            type="text"
          />
        </div>
        <div className="text-1-1">
          만원
        </div>
      </div>
      <Group1319
        text128={group1319Props.text128}
        inputPlaceholder={group1319Props.inputPlaceholder}
       
      />
      <div className="flex-row">
        <div className="text-17 notosanskr-normal-black-16px">
          특이사항
        </div>
        <div className="overlap-group6 border-1px-bon-jour">
          <textarea
            className="x-2 notosanskr-normal-silver-16px"
           
            name="공연관련특이사항을입력해주세요"
            placeholder="공연관련 특이사항을 입력해주세요."
            type="text"
          ></textarea>
        </div>
      </div>
      <div className="flex-row-1">
        <div className="text-20 notosanskr-normal-black-16px">
          자료
        </div>
        <div className="overlap-group7 border-1px-bon-jour">
          <div className="text-19 notosanskr-normal-silver-16px">
            관련 자료가 있다면 첨부해주세요.
          </div>
        </div>
        <Group1275 />
      </div>
    </div>
  );
}


function Group1320(props) {
  const { text2183, inputPlaceholder, text2184, className } = props;

  return (
    <div className={`group-1320 notosanskr-normal-black-16px ${className || ""}`}>
      <div className="text">
        {text2183}
      </div>
      <div className="overlap-group-1 border-1px-bon-jour">
        <input
          className="x-3 notosanskr-normal-silver-16px"
         
          name="공연시간을입력하세요"
          placeholder={inputPlaceholder}
          type="text"
        />
      </div>
      <div className="text-3">
        {text2184}
      </div>
    </div>
  );
}


function Group1319(props) {
  const { text128, inputPlaceholder } = props;

  return (
    <div className="group-1319">
      <div className="text-18 notosanskr-normal-black-16px">
        {text128}
      </div>
      <div className="overlap-group5 border-1px-bon-jour">
        <textarea
          className="x-6 notosanskr-normal-silver-16px"
         
          name="공연의전체적인구성및내용을적어주세요"
          placeholder={inputPlaceholder}
          type="text"
        ></textarea>
      </div>
    </div>
  );
}


function Property132() {
  return (
    <div className="button">
      <div className="text-25 notosanskr-medium-white-18px">
        취소
      </div>
    </div>
  );
}


function Component87Variant4(props) {
  const { children } = props;

  return (
    <div className="component-87-variant4">
      <div className="text-26 notosanskr-medium-white-20px">
        {children}
      </div>
    </div>
  );
}

const group1320Data = {
    text2183: "공연시간",
    inputPlaceholder: "공연시간을 입력하세요.",
    text2184: "분",
};

const group13202Data = {
    text2183: "공연횟수",
    inputPlaceholder: "공연 횟수를 입력하세요.",
    text2184: "회",
    className: "group-132-1-1",
};

const group13203Data = {
    text2183: "목표관객 수",
    inputPlaceholder: "목표관객수를 입력하세요.",
    text2184: "수",
    className: "group-132-1",
};

const group1319Data = {
    text128: "공연구성 및 내용",
    inputPlaceholder: "공연의 전체적인 구성 및 내용을 적어주세요.",
};

const group1913Data = {
    group1320Props: group1320Data,
    group13202Props: group13202Data,
    group13203Props: group13203Data,
    group1319Props: group1319Data,
};

