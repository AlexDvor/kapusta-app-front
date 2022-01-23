import React from 'react';
import SectionInputAndClear from '../../components/SectionInputAndClear/SectionInputAndClear';
import TabletDesktopTable from '../../components/TabletDesktopTable/TabletDesktopTable';
import MobileTable from '../../components/MobileTable/MobileTable';
import Summary from '../../components/Summary/Summary';
import IncomeExpenseBtns from '../../components/IncomeExpenseBtns/IncomeExpenseBtns';
import HomeBalance from '../../components/Balance/HomeBalance';
import FinanceTable from '../../components/FinanceTable/FinanceTable';
import Container from '../../components/Container/Container';
// import { changeNameBottomIcon } from '../../helpers/changeNameBottomIcon';
// import useWindowDimensions from '../../helpers/useWindowDimensions';
import {
  TableSummaryWrapper,
  PaperHomePage,
  BackgroundBody,
  // WrapperBottomIcon,
  // StyledBottomIcon,
  // PositionWrapper,
} from './HomePage.styled';

function HomePage() {
  // const { width } = useWindowDimensions();
  return (
    <BackgroundBody>
      <Container minTabletHeight={"1180px"} minDesktopHeight={"790px"}>
        <HomeBalance />
        <FinanceTable>
          <IncomeExpenseBtns />
          <PaperHomePage>
            <SectionInputAndClear />
            <TableSummaryWrapper>
              <TabletDesktopTable />
              <MobileTable />
              <Summary />
            </TableSummaryWrapper>
          </PaperHomePage>
        </FinanceTable>
      </Container>
    </BackgroundBody>
  );
}

export default HomePage;
