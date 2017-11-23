import S from 'string'
import { compose, withState, withHandlers } from 'recompose'

// Pages
import ScholarlyChallengePage from 'pages/ScholarlyChallenge'

// Data
import scholarlyChallenge from 'config/scholarlyChallenge'

export default compose(
	withState('currentCategory', '_', 'Desafio do conhecimento'),
	withState('questions', 'setQuestions', scholarlyChallenge
		.map((question, i) => ({
			...question,
			index: i
		}))),
	withHandlers({
		filterQuestions: ({ setQuestions }) => query => {
			const questions = [...scholarlyChallenge]
				.map((question, i) => ({
					...question,
					index: i
				}))
			const parsedQuery = S(query.toLowerCase()).latinise()
			const filteredQuestions = questions.filter(({ question }) => {
				const parsedName = S(question.toLowerCase()).latinise()
				return S(parsedName).contains(parsedQuery)
			})
			setQuestions(filteredQuestions)
		}
	})
)(ScholarlyChallengePage)