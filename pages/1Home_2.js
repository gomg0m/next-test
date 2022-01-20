import './1Home_2.css';
import React, {useEffect} from 'react';
import {loadTimelineData} from 'anima-timeline';

function App() {
  return <X01Home02 {...x01Home02Data} data-id="2:1356:an-component-instance" />;
}

export default App;

function X01Home02(props) {
  const {
    whalespace12,
    component64Props,
    component63Props,
    inputTextProps,
    inputText2Props,
    uiProps,
    ui2Props,
    ui3Props,
    inputText3Props,
    ui2Props2,
    ui22Props,
    ui23Props,
    x68MD6JProps,
    footerProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="x01-home-02 screen" data-id="2:1356">
        <Component64
          frame204Props={component64Props.frame204Props}
          buttonProps={component64Props.buttonProps}
          data-id="2:1397:an-component-instance"
        />
        <Component63 className={component63Props.className} data-id="2:1396:an-component-instance" />
        <InputText data-id="2:1390:an-component-instance">{inputTextProps.children}</InputText>
        <InputText2 data-id="2:1391:an-component-instance" />
        <img className="whalespace-1-2" data-id="2:1385" src={whalespace12} />
        <div className="overlap-group2" data-id="an|QEB93k5W">
          <InputText className={inputText2Props.className} data-id="2:1392:an-component-instance">
            {inputText2Props.children}
          </InputText>
          <div className="flex-row" data-id="an|Nkxx67JC">
            <Ui
              df1={uiProps.df1}
              text47={uiProps.text47}
              text48={uiProps.text48}
              text49={uiProps.text49}
              data-id="2:1358:an-component-instance"
            />
            <Ui
              df1={ui2Props.df1}
              text47={ui2Props.text47}
              text48={ui2Props.text48}
              text49={ui2Props.text49}
              className={ui2Props.className}
              data-id="2:1367:an-component-instance"
            />
            <Ui
              df1={ui3Props.df1}
              text47={ui3Props.text47}
              text48={ui3Props.text48}
              text49={ui3Props.text49}
              className={ui3Props.className}
              data-id="2:1376:an-component-instance"
            />
          </div>
          <X68MD6J data-id="2:1395:an-component-instance" />
        </div>
        <InputText className={inputText3Props.className} data-id="2:1393:an-component-instance">
          {inputText3Props.children}
        </InputText>
        <div className="flex-row-1" data-id="an|Cn5q1I46">
          <Ui2 text55={ui2Props2.text55} data-id="2:1386:an-component-instance" />
          <Ui2 text55={ui22Props.text55} className={ui22Props.className} data-id="2:1387:an-component-instance" />
          <Ui2 text55={ui23Props.text55} className={ui23Props.className} data-id="2:1388:an-component-instance" />
        </div>
        <X68MD6J className={x68MD6JProps.className} data-id="2:1394:an-component-instance" />
        <Footer
          footer2Props={footerProps.footer2Props}
          footer22Props={footerProps.footer22Props}
          data-id="2:1389:an-component-instance"
        />
      </div>
    </div>
  );
}


function Component64(props) {
  const { frame204Props, buttonProps } = props;

  return (
    <div className="component-65" data-id="2:1397">
      <div className="overlap-group1" data-id="an|92O2R22z">
        <Component63 data-id="I2:1397;2:56:an-component-instance" />
        <div className="frame-206" data-id="I2:1397;2:57">
          <Component49 data-id="I2:1397;2:58:an-component-instance" />
          <div className="frame-205" data-id="I2:1397;2:59">
            <Frame204
              frame199Props={frame204Props.frame199Props}
              frame1992Props={frame204Props.frame1992Props}
              frame1993Props={frame204Props.frame1993Props}
              frame1994Props={frame204Props.frame1994Props}
              data-id="I2:1397;2:60:an-component-instance"
            />
            <Button
              variantcontainedSizemediumContentTy={buttonProps.variantcontainedSizemediumContentTy}
              data-id="I2:1397;2:66:an-component-instance"
            />
          </div>
        </div>
      </div>
    </div>
  );
}


function Component63(props) {
  const { className } = props;

  return <div className={`component-63 ${className || ""}`} data-id="I2:1397;2:56"></div>;
}


function Component49() {
  return (
    <div className="component-50" data-id="I2:1397;2:58">
      <X7bAmwc data-id="I2:1397;2:58;2:70:an-component-instance" />
      <div className="text-14 roboto-bold-black-18px" data-id="I2:1397;2:58;2:71">
        첨단융합공연 지식기반정보플랫폼
      </div>
    </div>
  );
}


function X7bAmwc() {
  return (
    <div className="view" data-id="I2:1397;2:58;2:70">
      <img
        className="group-1"
        data-id="I2:1397;2:58;2:70;2:74"
        src="https://anima-uploads.s3.amazonaws.com/projects/61763ed8f006ecfc280e3680/releases/61763f472fbc493022ab4a33/img/group-1-1@2x.svg"
      />
    </div>
  );
}


function Frame204(props) {
  const { frame199Props, frame1992Props, frame1993Props, frame1994Props } = props;

  return (
    <div className="frame-204" data-id="I2:1397;2:60">
      <Frame199 data-id="I2:1397;2:61:an-component-instance">{frame199Props.children}</Frame199>
      <Frame199 className={frame1992Props.className} data-id="I2:1397;2:62:an-component-instance">
        {frame1992Props.children}
      </Frame199>
      <Frame199 className={frame1993Props.className} data-id="I2:1397;2:63:an-component-instance">
        {frame1993Props.children}
      </Frame199>
      <img
        className="line-43"
        data-id="I2:1397;2:64"
        src="https://anima-uploads.s3.amazonaws.com/projects/61763ed8f006ecfc280e3680/releases/61763f472fbc493022ab4a33/img/line-43@2x.svg"
      />
      <Frame199 className={frame1994Props.className} data-id="I2:1397;2:65:an-component-instance">
        {frame1994Props.children}
      </Frame199>
    </div>
  );
}


function Frame199(props) {
  const { children, className } = props;

  return (
    <div className={`frame-200 ${className || ""}`} data-id="I2:1397;2:61">
      <div className="text-15 notosans-medium-black-16px" data-id="I2:1397;2:61;2:110">
        {children}
      </div>
    </div>
  );
}


function Button(props) {
  const { variantcontainedSizemediumContentTy } = props;

  return (
    /*링크 추가해서 버튼 누르면 show1로 이동*/
    //<Link to='/2Show_1'>
    <div className="button01" data-id="I2:1397;2:66">
      <VariantcontainedSizemediumContentTy data-id="I2:1397;2:66;2:112:an-component-instance">
        {variantcontainedSizemediumContentTy.children}
      </VariantcontainedSizemediumContentTy>
    </div>
    //</Link>
  );
}


function VariantcontainedSizemediumContentTy(props) {
  const { children } = props;

  return (
    <div className="base-button01" data-id="I2:1397;2:66;2:112">
      <div className="buttontext notosanskr-medium-white-16px" data-id="I2:1397;2:66;2:112;4664:22177">
        {children}
      </div>
    </div>
  );
}


function InputText(props) {
  const { children, className } = props;

  return (
    <div className={`homehead-text ${className || ""}`} data-id="2:1390">
      <h1 className="text-11 valign-text-middle roboto-bold-log-cabin-50px" data-id="I2:1390;2:275">
        {children}
      </h1>
    </div>
  );
}


function InputText2() {
  return (
    <div className="hoembody-text" data-id="2:1391">
      <div className="textlabel valign-text-middle roboto-medium-storm-dust-18px" data-id="I2:1391;2:275">
        연출, 기술, 디자인팀 모두 하나의 공연에 대한
        <br />
        프로세스별로 의견을 나누고 공유할 수 있습니다.
      </div>
    </div>
  );
}


function Ui(props) {
  const { df1, text47, text48, text49, className } = props;

  return (
    <div className={`ui border-1px-bon-jour ${className || ""}`} data-id="2:1358">
      <img className="df-1" data-id="2:1359" src={df1} />
      <div className="view-1" data-id="2:1360">
        <div className="text-1-1 notosans-bold-black-20px" data-id="2:1362">
          {text47}
        </div>
        <div className="text notosans-normal-abbey-14px" data-id="2:1363">
          {text48}
        </div>
      </div>
      <div className="frame-148" data-id="2:1365">
        <div className="text-1 notosanskr-medium-black-12px" data-id="2:1366">
          {text49}
        </div>
      </div>
    </div>
  );
}


function X68MD6J(props) {
  const { className } = props;

  return (
    <div className={`frame-185 ${className || ""}`} data-id="2:1395">
      <div className="text-1-2 notosanskr-medium-black-18px" data-id="I2:1395;2:54">
        더 보러가기
      </div>
    </div>
  );
}


function Ui2(props) {
  const { text55, className } = props;

  return (
    <div className={`ui-3 border-1px-bon-jour ${className || ""}`} data-id="2:1386">
      <div className="text-9 valign-text-middle notosanskr-medium-black-20px" data-id="I2:1386;2:229">
        {text55}
      </div>
      <div className="phone valign-text-middle notosanskr-medium-gray-14px" data-id="I2:1386;2:230">
        2021.05.23
      </div>
    </div>
  );
}


function Footer(props) {
  const { footer2Props, footer22Props } = props;

  return (
    <div className="footer" data-id="2:1389">
      <div className="overlap-group" data-id="an|8rtke6iZ">
        <div className="footer-1" data-id="I2:1389;2:234">
          <div className="footercontents" data-id="I2:1389;2:235">
            <Footer2 data-id="I2:1389;2:236:an-component-instance">{footer2Props.children}</Footer2>
            <Footer3 data-id="I2:1389;2:237:an-component-instance" />
            <Footer2 className={footer22Props.className} data-id="I2:1389;2:238:an-component-instance">
              {footer22Props.children}
            </Footer2>
          </div>
          <img
            className="group-996"
            data-id="I2:1389;2:239"
            src="https://anima-uploads.s3.amazonaws.com/projects/61763ed8f006ecfc280e3680/releases/61763f472fbc493022ab4a33/img/group-996-1@2x.svg"
          />
        </div>
      </div>
    </div>
  );
}


function Footer2(props) {
  const { children, className } = props;

  return (
    <div className={`footer-2 ${className || ""}`} data-id="I2:1389;2:236">
      <div className="text-2 notosans-medium-gray-16px" data-id="I2:1389;2:236;2:50">
        {children}
      </div>
    </div>
  );
}


function Footer3() {
  return (
    <div className="footer-4" data-id="I2:1389;2:237">
      <div className="textlabel-1 notosans-medium-log-cabin-16px" data-id="I2:1389;2:237;2:50">
        개인정보 처리방침
      </div>
    </div>
  );
}

const frame199Data = {
    children: "소개",
};

const frame1992Data = {
    children: "공연DB",
    className: "frame-201",
};

const frame1993Data = {
    children: "공지사항",
    className: "frame-202",
};

const frame1994Data = {
    children: "로그아웃",
    className: "frame-203",
};

const frame204Data = {
    frame199Props: frame199Data,
    frame1992Props: frame1992Data,
    frame1993Props: frame1993Data,
    frame1994Props: frame1994Data,
};

const variantcontainedSizemediumContentTyData = {
    children: "공연 협업공간 가기",
};

const buttonData = {
    variantcontainedSizemediumContentTy: variantcontainedSizemediumContentTyData,
};

const component64Data = {
    frame204Props: frame204Data,
    buttonProps: buttonData,
};

const component632Data = {
    className: "rectangle-132",
};

const inputTextData = {
    children: <>공연의 과정이<br />한 눈에 보이는 협업공간!</>,
};

const inputText3Data = {
    children: "공연 DB",
    className: "homehead-text-1",
};

const uiData = {
    df1: "https://anima-uploads.s3.amazonaws.com/projects/61763ed8f006ecfc280e3680/releases/61763f472fbc493022ab4a33/img/df-1@2x.png",
    text47: "김장훈 콘서트",
    text48: "대중음악 콘서트",
    text49: "#움직이는 무대",
};

const ui2Data = {
    df1: "https://anima-uploads.s3.amazonaws.com/projects/61763ed8f006ecfc280e3680/releases/61763f472fbc493022ab4a33/img/df-1-1@2x.png",
    text47: "2012 런던올림픽 개막식",
    text48: "대중음악 콘서트",
    text49: "#플라잉 와이어",
    className: "ui-1",
};

const ui3Data = {
    df1: "https://anima-uploads.s3.amazonaws.com/projects/61763ed8f006ecfc280e3680/releases/61763f472fbc493022ab4a33/img/df-1-2@2x.png",
    text47: "미녀와 야수",
    text48: "라이센스 뮤지컬",
    text49: "#움직이는 무대",
    className: "ui-2",
};

const inputText4Data = {
    children: "공지사항",
    className: "homehead-text-2",
};

const ui22Data = {
    text55: "아르코 예술극장 개관 40주년 기념 [월간 읽는 극장 6월] <춤추는 시> 유튜브 생중계",
};

const ui23Data = {
    text55: "2021년도 3차 아르코, 대학로예술극장 티켓안내원 모집 공고",
    className: "ui-4",
};

const ui24Data = {
    text55: "[수리완료] 대학로예술극장 기계식 주차장 운영중단 안내",
    className: "ui-5",
};

const x68MD6J2Data = {
    className: "frame-184",
};

const footer2Data = {
    children: "이용약관",
};

const footer22Data = {
    children: "고객센터",
    className: "footer-3",
};

const footerData = {
    footer2Props: footer2Data,
    footer22Props: footer22Data,
};

const x01Home02Data = {
    whalespace12: "https://anima-uploads.s3.amazonaws.com/projects/61763ed8f006ecfc280e3680/releases/61763f472fbc493022ab4a33/img/whalespace-1-2@1x.png",
    component64Props: component64Data,
    component63Props: component632Data,
    inputTextProps: inputTextData,
    inputText2Props: inputText3Data,
    uiProps: uiData,
    ui2Props: ui2Data,
    ui3Props: ui3Data,
    inputText3Props: inputText4Data,
    ui2Props2: ui22Data,
    ui22Props: ui23Data,
    ui23Props: ui24Data,
    x68MD6JProps: x68MD6J2Data,
    footerProps: footerData,
};

