/* eslint-disable */
import {
    _saveQuestion,
    _saveQuestionAnswer
} from '../_DATA';

// eslint-disable-next-line no-undef
describe('isQuestionSaved', () => {
    it('should save question based on provided data', async () => {
        const qn = {
            optionOneText: 'option One text',
            optionTwoText: 'option Two text',
            author: 'author'
        };

        const result = await _saveQuestion(qn);

        // eslint-disable-next-line no-undef
        expect(result).toEqual({
            id: expect.any(String),
            timestamp: expect.any(Number),
            author: 'author',
            optionOne: { votes: [], text: 'option One text' },
            optionTwo: { votes: [], text: 'option Two text' }
        });

        expect(result.author).toEqual('author');
        expect(result.optionOne.text).toEqual('option One text');
        expect(result.optionTwo.text).toEqual('option Two text');
    });
    it('should throw and error if data provided does not contain all information expected', async () => {
        await expect(_saveQuestion({})).rejects.toEqual('Please provide optionOneText, optionTwoText, and author');
        await expect(_saveQuestion({
            optionOneText: 'option One text',
            optionTwoText: 'option Two text'
        })).rejects.toEqual('Please provide optionOneText, optionTwoText, and author');
        await expect(_saveQuestion({
            optionOneText: 'option One text'
        })).rejects.toEqual('Please provide optionOneText, optionTwoText, and author');
        await expect(_saveQuestion({
            optionTwoText: 'option Two text',
            author: 'author'
        })).rejects.toEqual('Please provide optionOneText, optionTwoText, and author');
    });
});

describe('isAnswerSaved', () => {
    it('should return true if correctly formatted data is passed to the _saveQuestionAnswer', async () => {
        const data = {
            authedUser: 'sarahedo',
            qid: 'am8ehyc8byjqgar0jgpub9',
            answer: 'optionOne'
        };
        await expect(_saveQuestionAnswer(data)).resolves.toEqual(true);
    });

    it('should throw an error if incorrect data is passed to the _saveQuestionAnswer', async () => {
        const incorrectData = {
            authedUser: 'sarahedo',
            answer: 'optionOne'
        };
        await expect(_saveQuestionAnswer(incorrectData)).rejects.toEqual('Please provide authedUser, qid, and answer');
    });
});
