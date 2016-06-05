/**
 * @swagger
 * resourcePath: /v1
 * description: All about API
 */

/**
 * @swagger
 * path: /v1/novel
 * operations:
 *   -  httpMethod: GET
 *      summary: fetch all master_novel data
 *      notes: Returns a novel based on novels
 *      responseClass: novel
 *      nickname: novel
 *      consumes:
 *        - application/json
 *      parameters:
 *        - name: id
 *          description: novel's id
 *          paramType: query
 *          required: false
 *          type: Int
 */

/**
 * @swagger
 * path: /v1/music
 * operations:
 *   -  httpMethod: GET
 *      summary: fetch all master_music data
 *      notes: Returns a user based on username
 *      responseClass: music
 *      nickname: music
 *      consumes:
 *        - application/json
 *      parameters:
 *        - name: id
 *          description: music's id
 *          paramType: query
 *          required: false
 *          type: Int
 *        - name: scale
 *          description: scale's id
 *          paramType: query
 *          required: false
 *          type: Int
 *        - name: rhythm
 *          description: rhythm's id
 *          paramType: query
 *          required: false
 *          type: Int
 *        - name: time
 *          description: time's id
 *          paramType: query
 *          required: false
 *          type: Int
 */

/**
 * @swagger
 * path: /v1/scale
 * operations:
 *   -  httpMethod: GET
 *      summary: fetch all scale data
 *      notes: Returns a user based on username
 *      responseClass: scale
 *      nickname: scale
 *      consumes:
 *        - application/json
 *      parameters:
 *        - name: id
 *          description: scale's id
 *          paramType: query
 *          required: false
 *          type: Int
 */

/**
 * @swagger
 * path: /v1/login
 * operations:
 *   -  httpMethod: GET
 *      summary: Login with username and password
 *      notes: Returns a user based on username
 *      responseClass: login
 *      nickname: login
 *      consumes:
 *        - application/json
 *      parameters:
 *        - name: name
 *          description: Your username
 *          paramType: query
 *          required: true
 *          type: String
 *        - name: password
 *          description: Your username
 *          paramType: query
 *          required: true
 *          type: Int
 *      responses:
 *          200:
 *              description: Success
 *              schema:
 *                  type: object
 *                  items:
 *                      $ref: "#/definitions/Path" 
 *          400:
 *              description: Error
 *              schema: 
 *                  type: object
 */

/**
 * @swagger
 * path: /v1/user
 * operations:
 *   -  httpMethod: POST
 *      summary: Login with username and password
 *      notes: Returns a user based on username
 *      responseClass: user
 *      nickname: user
 *      consumes:
 *        - application/json
 *      parameters:
 *        - name: body
 *          description: Your username
 *          paramType: body
 *          required: true
 *          type: user
 *          dataType: object
 *      responses:
 *          200:
 *              description: Success
 *              schema:
 *                  type: object
 *                  items:
 *                      $ref: "#/definitions/Path" 
 *          400:
 *              description: Error
 *              schema: 
 *                  type: object
 */

/**
 * @swagger
 * models:
 *   user:
 *     id: user
 *     properties:
 *       name:
 *         type: String
 *       age:
 *         type: Int
 *       sex:
 *         type: String
 *       password:
 *         type: Int
 *       questionnaire_1:
 *         type: Int
 *       questionnaire_2:
 *         type: Int
 *       questionnaire_3:
 *         type: Int
 *       questionnaire_4:
 *         type: Int
 */