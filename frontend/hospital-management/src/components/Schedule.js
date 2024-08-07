import * as React from 'react';
import {
  styled, darken, alpha, lighten,
} from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import { ViewState, EditingState } from '@devexpress/dx-react-scheduler';
import classNames from 'clsx';
import {
  Scheduler,
  MonthView,
  Appointments,
  Toolbar,
  DateNavigator,
  AppointmentTooltip,
  AppointmentForm,
  EditRecurrenceMenu,
  Resources,
  DragDropProvider,
} from '@devexpress/dx-react-scheduler-material-ui';
import { owners } from './sample_tasks';
import { getAppointments } from "../api";

const PREFIX = 'Demo';

const classes = {
  cell: `${PREFIX}-cell`,
  content: `${PREFIX}-content`,
  text: `${PREFIX}-text`,
  sun: `${PREFIX}-sun`,
  cloud: `${PREFIX}-cloud`,
  rain: `${PREFIX}-rain`,
  sunBack: `${PREFIX}-sunBack`,
  cloudBack: `${PREFIX}-cloudBack`,
  rainBack: `${PREFIX}-rainBack`,
  opacity: `${PREFIX}-opacity`,
  appointment: `${PREFIX}-appointment`,
  apptContent: `${PREFIX}-apptContent`,
  flexibleSpace: `${PREFIX}-flexibleSpace`,
  flexContainer: `${PREFIX}-flexContainer`,
  tooltipContent: `${PREFIX}-tooltipContent`,
  tooltipText: `${PREFIX}-tooltipText`,
  title: `${PREFIX}-title`,
  icon: `${PREFIX}-icon`,
  circle: `${PREFIX}-circle`,
  textCenter: `${PREFIX}-textCenter`,
  dateAndTitle: `${PREFIX}-dateAndTitle`,
  titleContainer: `${PREFIX}-titleContainer`,
  container: `${PREFIX}-container`,
};

const getBorder = theme => (`1px solid ${theme.palette.mode === 'light'
  ? lighten(alpha(theme.palette.divider, 1), 0.88)
  : darken(alpha(theme.palette.divider, 1), 0.68)
  }`);

const DayScaleCell = props => (
  <MonthView.DayScaleCell {...props} style={{ textAlign: 'center', fontWeight: 'bold' }} />
);

/// #FOLD_BLOCK
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${classes.cell}`]: {
    color: '#0f172a!important',
    position: 'relative',
    userSelect: 'none',
    verticalAlign: 'top',
    padding: 0,
    height: 100,
    borderLeft: getBorder(theme),
    '&:first-of-type': {
      borderLeft: 'none',
    },
    '&:last-child': {
      paddingRight: 0,
    },
    'tr:last-child &': {
      borderBottom: 'none',
    },
    '&:hover': {
      backgroundColor: '#94a3b8',
    },
    '&:focus': {
      backgroundColor: "#94a3b8",
      outline: 0,
    },
  },
  [`&.${classes.sunBack}`]: {
    backgroundColor: '#e2e8f0',
  },
  [`&.${classes.cloudBack}`]: {
    backgroundColor: '#e2e8f0',
  },
  [`&.${classes.rainBack}`]: {
    backgroundColor: '#e2e8f0',
  },
  [`&.${classes.opacity}`]: {
    opacity: '0.5',
  },
}));
// #FOLD_BLOCK
const StyledDivText = styled('div')(() => ({
  [`&.${classes.text}`]: {
    padding: '0.5em',
    textAlign: 'center',
  },
}));

// #FOLD_BLOCK
const StyledAppointmentsAppointment = styled(Appointments.Appointment)(() => ({
  [`&.${classes.appointment}`]: {
    borderRadius: '10px',
    '&:hover': {
      opacity: 0.6,
    },
  },
}));

// #FOLD_BLOCK
const StyledAppointmentsAppointmentContent = styled(Appointments.AppointmentContent)(() => ({
  [`&.${classes.apptContent}`]: {
    '&>div>div': {
      whiteSpace: 'normal !important',
      lineHeight: 1.2,
    },
  },
}));

// const appointments = [
//   {
//     id: 0,
//     title: 'Watercolor Landscape',
//     startDate: new Date(2022, 10, 23, 9, 30),
//     endDate: new Date(2022, 10, 23, 11, 30),
//     ownerId: 1,
//   }, {
//     id: 1,
//     title: 'Monthly Planning',
//     startDate: new Date(2022, 10, 8, 9, 30),
//     endDate: new Date(2022, 10, 10, 11, 30),
//     ownerId: 1,
//   }, {
//     id: 2,
//     title: 'Recruiting students',
//     startDate: new Date(2018, 6, 9, 12, 0),
//     endDate: new Date(2018, 6, 9, 13, 0),
//     ownerId: 2,
//   }, {
//     id: 3,
//     title: 'Oil Painting',
//     startDate: new Date(2018, 6, 18, 14, 30),
//     endDate: new Date(2018, 6, 18, 15, 30),
//     ownerId: 2,
//   }, {
//     id: 4,
//     title: 'Open Day',
//     startDate: new Date(2018, 6, 20, 12, 0),
//     endDate: new Date(2018, 6, 20, 13, 35),
//     ownerId: 6,
//   }, {
//     id: 5,
//     title: 'Watercolor Landscape',
//     startDate: new Date(2018, 6, 6, 13, 0),
//     endDate: new Date(2018, 6, 6, 14, 0),
//     rRule: 'FREQ=WEEKLY;BYDAY=FR;UNTIL=20180816',
//     exDate: '20180713T100000Z,20180727T100000Z',
//     ownerId: 2,
//   }, {
//     id: 6,
//     title: 'Meeting of Instructors',
//     startDate: new Date(2018, 5, 28, 12, 0),
//     endDate: new Date(2018, 5, 28, 12, 30),
//     rRule: 'FREQ=WEEKLY;BYDAY=TH;UNTIL=20180727',
//     exDate: '20180705T090000Z,20180719T090000Z',
//     ownerId: 5,
//   }, {
//     id: 7,
//     title: 'Oil Painting for Beginners',
//     startDate: new Date(2018, 6, 3, 11, 0),
//     endDate: new Date(2018, 6, 3, 12, 0),
//     rRule: 'FREQ=WEEKLY;BYDAY=TU;UNTIL=20180801',
//     exDate: '20180710T080000Z,20180724T080000Z',
//     ownerId: 3,
//   }, {
//     id: 8,
//     title: 'Watercolor Workshop',
//     startDate: new Date(2018, 6, 9, 11, 0),
//     endDate: new Date(2018, 6, 9, 12, 0),
//     ownerId: 3,
//   },
// ];

const resources = [{
  fieldName: 'ownerId',
  title: 'Owners',
  instances: owners,
}];

// #FOLD_BLOCK
const CellBase = React.memo(({
  startDate,
  formatDate,
  otherMonth,
  // #FOLD_BLOCK
}) => {
  const iconId = Math.abs(Math.floor(Math.sin(startDate.getDate()) * 10) % 3);
  const isFirstMonthDay = startDate.getDate() === 1;
  const formatOptions = isFirstMonthDay
    ? { day: 'numeric', month: 'long' }
    : { day: 'numeric' };
  return (
    <StyledTableCell
      tabIndex={0}
      className={classNames({
        [classes.cell]: true,
        [classes.rainBack]: iconId === 0,
        [classes.sunBack]: iconId === 1,
        [classes.cloudBack]: iconId === 2,
        [classes.opacity]: otherMonth,
      })}
    >
      <StyledDivText className={classes.text}>
        {formatDate(startDate, formatOptions)}
      </StyledDivText>
    </StyledTableCell>
  );
});

const TimeTableCell = (CellBase);

const Appointment = (({ ...restProps }) => (
  <StyledAppointmentsAppointment
    {...restProps}
    className={classes.appointment}
  />
));

const AppointmentContent = (({ ...restProps }) => (
  <StyledAppointmentsAppointmentContent {...restProps} className={classes.apptContent} />
));

export default class Demo extends React.PureComponent {
  // #FOLD_BLOCK
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };

    this.commitChanges = this.commitChanges.bind(this);
  }

  async componentDidMount() {
    this.processAppointments(await getAppointments())
 }

  processAppointments(appts){
    let tempArr = []

    for (let i = 0; i < appts.length; i++) {
      const start_datetime = appts[i].date.concat("T".concat(appts[i].start_time.concat(":00-05:00")))
      const end_datetime = appts[i].date.concat("T".concat(appts[i].end_time.concat(":00-05:00")))

      tempArr.push(
        {
          id: appts[i].appointment_id,
          title: appts[i].appointment_name,
          startDate: start_datetime,
          endDate: end_datetime,
          ownerId: 1,
        },
      )
    }
    this.setState({data:tempArr})
  }

  // #FOLD_BLOCK
  commitChanges({ added, changed, deleted }) {
    this.setState((state) => {
      let { data } = state;
      if (added) {
        const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
        data = [...data, { id: startingAddedId, ...added }];
      }
      if (changed) {
        data = data.map(appointment => (
          changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
      }
      if (deleted !== undefined) {
        data = data.filter(appointment => appointment.id !== deleted);
      }
      return { data };
    });
  }

  render() {
    const { data } = this.state;

    return (
      <Paper >
        <Scheduler
          data={data}
        >
          <EditingState
            onCommitChanges={this.commitChanges}
          />
          <ViewState
            defaultCurrentDate="2022-11-20"
          />

          <MonthView
            timeTableCellComponent={TimeTableCell}
            dayScaleCellComponent={DayScaleCell}
          />
          <Appointments
            appointmentComponent={Appointment}
            appointmentContentComponent={AppointmentContent}
          />
          <Resources
            data={resources}
          />
          <Toolbar />
          <DateNavigator />
          <EditRecurrenceMenu />
          <AppointmentTooltip
            showCloseButton
            showDeleteButton
            showOpenButton
          />
          <AppointmentForm />
          <DragDropProvider />
        </Scheduler>
      </Paper>
    );
  }
}
