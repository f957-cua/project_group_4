import devTeam from '../../template/dev-team.json';
import devTeamTemplate from '../../template/dev-team-cards.hbs';
import refs from '../refs';

const devTeamMarkup = devTeamTemplate(devTeam);
refs.test.insertAdjacentHTML('afterbegin', devTeamMarkup);
